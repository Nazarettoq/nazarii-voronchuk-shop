import React from 'react'

import NextImg from '@img/next_img.svg'
import PrevImg from '@img/prev_img.svg'
import '@styles/Cart.scss'

class CartGallery extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { imageIndex: 0 }
    this.nextImage = this.nextImage.bind(this)
    this.previousImage = this.previousImage.bind(this)
  }

  nextImage() {
    const length = this.props.images.length
    const { imageIndex } = this.state
    if (imageIndex !== length - 1) {
      this.setState({ imageIndex: imageIndex + 1 })
    } else {
      this.setState({ imageIndex: 0 })
    }
  }

  previousImage() {
    const length = this.props.images.length
    const { imageIndex } = this.state
    if (imageIndex !== 0) {
      this.setState({ imageIndex: imageIndex - 1 })
    } else {
      this.setState({ imageIndex: length - 1 })
    }
  }

  render() {
    const { images } = this.props
    const { imageIndex } = this.state
    return (
      <div className={`image-container image-container${this.props.styleOf}`}>
        <div className={`cart-img-box`}>
          <img className={`cart-img-box__item`} src={images[imageIndex]} alt="item" />
        </div>
        <div className={`cart-img-box__arrow`}>
          {images.length > 1 && (
            <>
              <button
                className="direction"
                style={{ backgroundImage: `url(${PrevImg})` }}
                onClick={this.previousImage}></button>
              <button
                className="direction"
                style={{ backgroundImage: `url(${NextImg})` }}
                onClick={this.nextImage}></button>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default CartGallery
