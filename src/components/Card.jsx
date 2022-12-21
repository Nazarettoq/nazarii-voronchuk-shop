import React from 'react'
import buy from '@img/buy.svg'
import { Link } from 'react-router-dom'

import { loadCurrentItemAC, addToCartAC } from '@redux/actions'
import { connect } from 'react-redux'
import '@styles/Card.scss'
class Card extends React.PureComponent {
  constructor(props) {
    super(props)
    this.showButton = this.showButton.bind(this)
    this.hideButton = this.hideButton.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.state = {
      isHovering: false,
    }
  }
  showButton() {
    this.setState(() => ({
      isHovering: true,
    }))
  }

  hideButton() {
    this.setState(() => ({
      isHovering: false,
    }))
  }

  addToCart(item) {
    const { toCart } = this.props
    const { attributes } = item

    if (attributes.length > 0) {
      const format = attributes.map((attribute) => {
        const { items, type, id, name } = attribute
        const item = items.find((attribute) => ({ item: attribute }))
        return (attribute = { item, type, id, name })
      })
      const newItem = Object.assign({}, { item }, { savedAttribute: format })
      toCart(newItem)
    } else {
      const newItem = Object.assign({}, { item: item })
      toCart(newItem)
    }
  }

  render() {
    const { data } = this.props
    const { sendItem } = this.props
    return (
      <Link to={`/product/${this.props.data.id}`} style={{ textDecoration: 'none' }}>
        <div
          className={this.props.data.inStock ? 'card' : 'card out-of-stock '}
          onMouseEnter={this.showButton}
          onMouseLeave={this.hideButton}
          onClick={() => {
            sendItem(data)
          }}>
          <div className="card__image-box">
            <img className="image" src={this.props.data.gallery[0]} alt={this.props.data.name} />
            {this.props.data.inStock /* && this.state.isHovering */ && (
              <>
                <button
                  className="to-cart"
                  style={{ backgroundImage: `url(${buy})` }}
                  onClick={(event) => {
                    event.preventDefault()
                    this.addToCart(data)
                  }}></button>
              </>
            )}
            {!this.props.data.inStock && <p className="out-of-stock-text">OUT OF STOCK</p>}
          </div>
          <div className="card__content">
            <div className="card__content__title">
              {this.props.data.brand} {this.props.data.name}
            </div>
            <div className="card__content__price">
              {this.props.data.prices[this.props.currency].currency.symbol}
              {this.props.data.prices[this.props.currency].amount}
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendItem: (item) => dispatch(loadCurrentItemAC(item)),
  toCart: (item) => dispatch(addToCartAC(item)),
})

export default connect(null, mapDispatchToProps)(Card)
