import '@styles/App.scss'

import { Component } from 'react'
import CategoryItems from './Category'
import Header from './Header'

class App extends Component {
  render(){return (
    <div className="app">
      <Header/>
      <CategoryItems/>
    </div>
  )
}}

export default App
