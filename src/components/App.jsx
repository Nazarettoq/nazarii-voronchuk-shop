import '@styles/App.scss'

import { Component } from 'react'
import Cart from './Cart'
import CategoryItems from './Category'
import Header from './Header'
import ProductPage from './PDP'

class App extends Component {
  render(){return (
    <div className="app">
      <Header/>
      <Cart/>
    </div>
  )
}}

export default App
