import { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { client } from '@apollo-folder/client'
import { CATEGORIES_NAME } from '@apollo-folder/requests'

import Header from './Header'
import ProductListing from './PLP'
import ProductDescription from './PDP'
import CartMain from './cart/CartMain'

import '@styles/App.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      isLoaded: false,
    }
  }

  async componentDidMount() {
    client.query({ query: CATEGORIES_NAME }).then((res) => {
      this.setState({ categories: res.data.categories, isLoaded: res.loading })
    })
  }

  render() {
    const currentCategorie = this.props.category ? this.props.category : 'all'
    const basename = process.env.PUBLIC_URL
    return (
      <div className="app">
        {!this.state.isLoaded && (
          <>
            <Header categories={this.state.categories} currentCategorie={currentCategorie} />
            {this.props.isModal && <div id="overlay"></div>}

            <Routes>
              <Route
                path={`${basename}/${currentCategorie}`}
                element={<ProductListing currentCategorie={currentCategorie} />}
              />
              <Route
                path={`${basename}/`}
                element={<ProductListing currentCategorie={currentCategorie} />}
              />
              <Route path={`${basename}/product/:id`} element={<ProductDescription />} />
              <Route path={`${basename}/cart`} element={<CartMain />} />
            </Routes>
          </>
        )}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  category: state.cart.category,
  isModal: state.cart.isModal,
})
export default connect(mapStateToProps, null)(App)
