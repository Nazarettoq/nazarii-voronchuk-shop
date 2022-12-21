import React from 'react'
import '@styles/Cart.scss'

export class CartTotal extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  makeOrder(totalItems) {
    if (totalItems > 0) {
      alert('Thank you for your purchase')
    } else {
      alert('Your order is empty')
    }
  }
  render() {
    return (
      <>
        <div className="total-block">
          <div className="total-block__row">
            <div className="total-block__row__title">
              <div>Tax 21%:</div>
              <div>Quantity:</div>
              <div>Total:</div>
            </div>
            <ul className="total-block__row__value">
              <div>{this.props.currencySymbol + this.props.tax}</div>
              <div>{this.props.totalItems}</div>
              <div>{this.props.currencySymbol + this.props.total}</div>
            </ul>
          </div>
          <button className="order-button" onClick={() => this.makeOrder(this.props.totalItems)}>
            Order
          </button>
        </div>
      </>
    )
  }
}
