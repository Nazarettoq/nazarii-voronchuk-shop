import React from 'react'
import { connect } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { client } from '@apollo-folder/client'
import { CATEGORIES_NAME } from '@apollo-folder/requests'

import Header from './Header'
import ProductListing from './PLP'
import ProductDescription from './PDP'
import CartMain from './cart/CartMain'

import '@styles/App.scss'

class App extends React.PureComponent {
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
    const currentCategory = this.props.category ? this.props.category : 'all'
    return (
      <div className="app">
        {!this.state.isLoaded && (
          <>
            <Header categories={this.state.categories} currentCategory={currentCategory} />
            {this.props.isModal && <div id="overlay"></div>}
            <div className="app-content">
              <Routes>
                <Route
                  path={`/${currentCategory}`}
                  element={<ProductListing currentCategory={currentCategory} />}
                />
                <Route path={`/`} element={<ProductListing currentCategory={currentCategory} />} />
                <Route path={`/product/:id`} element={<ProductDescription />} />
                <Route path={`/cart`} element={<CartMain />} />
              </Routes>
            </div>
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
