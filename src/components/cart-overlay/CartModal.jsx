import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '@styles/CartModal.scss'
import Cart from '@components/cart/Cart'
import { getTotalPrice, totalItemCount } from '@redux/cart.utils'

class CartModal extends PureComponent {
  render() {
    const { cart, closeModal, currency } = this.props
    const totalItems = totalItemCount(cart)
    const total = getTotalPrice(cart, currency)
    const item = cart.find((item) => item)
    return (
      <>
        <div className="cartmodal">
          <div className="cartmodal__description">
            <div className="cartmodal__description__title">My Bag, </div>

            <div className="cartmodal__description__value">{totalItems} items</div>
          </div>
          <div className="cartmodal__wrap">
            <Cart styleOf={'modal'} />
          </div>
          <div className="cartmodal__wrap__total">
            {item !== undefined && (
              <>
                <div className="cartmodal__wrap__total__title">Total</div>
                <div className="cartmodal__wrap__total__value">{`${
                  item.item.prices[currency].currency.symbol + total
                }`}</div>
              </>
            )}
          </div>
          <div className="cartmodal__buttons">
            <Link to="/cart">
              <button onClick={closeModal}>
                <div className="cartmodal__buttons__cart"> view bag</div>
              </button>
            </Link>
            <button onClick={() => alert('Check out')}>
              <div className="cartmodal__buttons__buy">check out</div>
            </button>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  currency: state.cart.currency,
})

export default connect(mapStateToProps, null)(CartModal)
