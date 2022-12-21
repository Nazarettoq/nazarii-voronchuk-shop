import React from 'react'
import { connect } from 'react-redux'
import { getTotalPrice, taxCount, totalItemCount } from '@redux/cart.utils'
import Cart from './Cart'
import '@styles/Cart.scss'
import { CartTotal } from './CartTotal'

class CartMain extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      tax: 21,
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
          <CartTotal
            currencySymbol={currencySymbol}
            total={total}
            totalItems={totalItems}
            tax={tax}
          />
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
