import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getTotalPrice, taxCount, totalItemCount } from '@redux/cart.utils'
import Cart from './Cart'
import '@styles/Cart.scss'

class CartMain extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      tax: 21,
    }
  }
  makeOrder(totalItems) {
    if (totalItems > 0) {
      alert('Thank you for your purchase')
    } else {
      alert('Your order is empty')
    }
  }
  render() {
    const currencySymbol =
      this.props.cart.length > 0
        ? this.props.cart[0].item.prices[this.props.currency].currency.symbol
        : ''
    const total = getTotalPrice(this.props.cart, this.props.currency)
    const tax = taxCount(total, this.state.tax)
    const totalItems = totalItemCount(this.props.cart)
    return (
      <>
        <div className="cart">
          <div className="cart-text">Cart</div>
          <div className="line" />
          <Cart />
          <div className="total-block">
            <div className="total-block__row">
              <div>
                <div className="total-block__row__title">Tax 21%:</div>
                <div className="total-block__row__title">Quantity:</div>
                <div className="total-block__row__title">Total:</div>
              </div>
              <div>
                <div className="total-block__row__value">{currencySymbol + tax}</div>
                <div className="total-block__row__value">{totalItems}</div>
                <div className="total-block__row__value">{currencySymbol + total}</div>
              </div>
            </div>
            <button className="order-button" onClick={() => this.makeOrder(totalItems)}>
              Order
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
export default connect(mapStateToProps, null)(CartMain)
