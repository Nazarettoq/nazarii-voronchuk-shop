import React from 'react'
import './Preloader.scss'
class Preloader extends React.PureComponent {
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
