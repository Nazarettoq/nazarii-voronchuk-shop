import React from 'react'
import { Component } from 'react'
import './Preloader.scss'
class Preloader extends Component {
  render() {
    return (
      <div className="load">
        <div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }
}

export default Preloader
