import '@styles/App.scss'

import { Component } from 'react'
import CategoryItems from './Category'
import Header from './Header'
import ProductPage from './PDP'

class App extends Component {
  render(){return (
    <div className="app">
      <Header/>
      <ProductPage/>
    </div>
  )
}}

export default App
