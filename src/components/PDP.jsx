import React from 'react'
import { connect } from 'react-redux'
import { addToCartAC } from '@redux/actions'
import { client } from '@apollo-folder/client'
import { SELECTED_PRODUCT } from '@apollo-folder/requests'
import DOMPurify from 'isomorphic-dompurify'
import Attributes from './Attributes'
import '@styles/PDP.scss'
import '@styles/Characteristic.scss'
import Preloader from './preloader/Preloader'

class ProductDescription extends React.PureComponent {
  constructor(props) {
    super(props)
    this.getProduct = this.getProduct.bind(this)
    this.saveAttribute = this.saveAttribute.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.mapProduct = this.mapProduct.bind(this)
    this.setMainImage = this.setMainImage.bind(this)
    this.state = {
      item: {},
      chosenImage: [],
      savedAttributes: [],
      prices: [],
      isLoaded: false,
    }
  }
  componentDidMount() {
    this.getProduct()
  }
  saveAttribute({ attr }) {
    const attributes = this.state.savedAttributes.map((i) => {
      if (i.id === attr.name) {
        return {
          ...i,
          item: attr.item,
        }
      }
      return { ...i }
    })
    this.setState({ savedAttributes: attributes })
  }
  mapProduct() {
    if (this.state.item) {
      this.setState((prevState) => {
        const emptyAttrs = this.state.item.attributes.map((i) => {
          return {
            id: i.id,
            name: i.name,
            type: i.type,
            item: null,
          }
        })
        return { ...prevState, savedAttributes: emptyAttrs }
      })
      this.setState({ chosenImage: this.state.item.gallery[0] })
    }
  }
  setMainImage(img) {
    if (this.state.chosenImage !== img) {
      this.setState({ chosenImage: img })
    }
  }
  addToCart() {
    const { toCart } = this.props
    const { savedAttributes, item: prod } = this.state
    if (prod.attributes.length === 0) {
      const newItem = Object.assign({}, { item: prod })
      toCart(newItem)
    } else {
      const notNull = this.state.savedAttributes.every((el) => el.item !== null)
      if (notNull) {
        const item = {}
        item.savedAttribute = savedAttributes
        item.item = prod
        toCart(item)
      } else {
        alert('Please select all attributes of your current item.')
      }
    }
  }
  async getProduct() {
    const id = this.props.item.id
    const response = await client.query({
      query: SELECTED_PRODUCT,
      variables: {
        id: id,
      },
    })

    this.setState({ item: response.data.product, isLoaded: true }, () => {
      this.mapProduct()
    })
  }
  createMarkup(text) {
    return { __html: text }
  }
  render() {
    const item = this.state.item
    const currency = this.props.currency
    const { savedAttributes } = this.state
    const safeDescription = DOMPurify.sanitize(item.description)
    return this.state.isLoaded ? (
      <>
        <div className="PDP">
          <div className="pictures">
            <div className="pictures__sub">
              {item.gallery.map((data, id) => {
                return (
                  <img
                    className="pictures__sub__item"
                    key={id}
                    src={data}
                    alt={'sub pic'}
                    onClick={() => this.setMainImage(data)}
                  />
                )
              })}
            </div>
            <img className="pictures__main" src={this.state.chosenImage} alt={'main'} />
          </div>
          <div className="description">
            <div className="description__content">
              <div className="name">
                <div className="name__brand">{item.brand}</div>
                <div>{item.name}</div>
              </div>
              <Attributes
                item={item}
                chosenAttributes={savedAttributes}
                handleClick={this.saveAttribute}
                isCart={false}
              />
              <div className="characteristic">PRICE:</div>
              <div className="price">
                {item.prices[currency].currency.symbol + item.prices[currency].amount}
              </div>
              {item.inStock ? (
                <div className="button in_stock" onClick={() => this.addToCart()}>
                  ADD TO CARD
                </div>
              ) : (
                <div className="button out_of_stock">Out of Stock</div>
              )}
              <div className="item__description">
                <div
                  className="item__description__text"
                  dangerouslySetInnerHTML={this.createMarkup(safeDescription)}></div>
              </div>
            </div>
          </div>
        </div>
      </>
    ) : (
      <Preloader />
    )
  }
}
const mapStateToProps = (state) => ({
  currency: state.cart.currency,
  cart: state.cart.cart,
  item: state.cart.currentItem,
})

const mapDispatchToProps = (dispatch) => ({
  toCart: (state) => dispatch(addToCartAC(state)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDescription)
