import { Component } from 'react'
import { connect } from 'react-redux'
import { sendProductsAC } from '@redux/actions'
import { client } from '@apollo-folder/client'
import { SELECTED_CATEGORIE } from '@apollo-folder/requests'
import Card from './Card'
import '@styles/PLP.scss'
import Preloader from './preloader/Preloader'

class ProductListing extends Component {
  constructor(props) {
    super(props)
    this.fetchProducts = this.fetchProducts.bind(this)
    this.state = {
      isLoaded: false,
    }
  }
  componentDidMount() {
    this.fetchProducts()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentCategorie !== this.props.currentCategorie) {
      this.setState({ isLoaded: false })
      this.fetchProducts()
    }
  }
  async fetchProducts() {
    const { saveProducts } = this.props
    const result = await client.query({
      query: SELECTED_CATEGORIE,
      variables: {
        input: {
          title: `${this.props.currentCategorie}`,
        },
      },
    })
    saveProducts(result.data.category.products)
    this.setState({ isLoaded: true })
  }
  render() {
    const { currentCategorie } = this.props
    return this.state.isLoaded ? (
      <div className="main-content">
        <p className="category-name">{currentCategorie}</p>
        <div className="category-cards">
          <div className="category-cards__column">
            {this.props.products.map((product, id) => (
              <Card key={id} data={product} currency={this.props.currentCurrency} />
            ))}
          </div>
        </div>
      </div>
    ) : (
      <Preloader />
    )
  }
}
const mapStateToProps = (state) => ({
  products: state.cart.products,
  currentCurrency: state.cart.currency,
  category: state.cart.category,
})

const mapDispatchToProps = (dispatch) => ({
  saveProducts: (state) => dispatch(sendProductsAC(state)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)
