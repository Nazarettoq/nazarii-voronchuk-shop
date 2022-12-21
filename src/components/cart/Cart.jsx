import React from 'react'
import { connect } from 'react-redux'
import { addToCartAC, removeFromCartAC, changeAttributeAC } from '@redux/actions'
import Attributes from '../Attributes'
import CartGallery from './CartGallery'
import PlusSquare from '@img/plus-square.svg'
import MinusSquare from '@img/minus-square.svg'
import '@styles/Cart.scss'
import '@styles/Cart-modal.scss'

class Cart extends React.PureComponent {
  render() {
    const { currency } = this.props
    return (
      <div>
        {this.props.cart &&
          this.props.cart.map((item, id) => {
            const itemInfo = item.item
            return (
              <div className={`row row${this.props.styleOf}`} key={id}>
                <div className={`description-block`}>
                  <div className={`name`}>
                    <div className={`name__brand`}>{itemInfo.brand}</div>
                    <div>{itemInfo.name}</div>
                  </div>
                  <div className={`price`}>
                    {itemInfo.prices[currency].currency.symbol + itemInfo.prices[currency].amount}
                  </div>
                  <Attributes
                    item={itemInfo}
                    chosenAttributes={item.savedAttribute}
                    isCart={true}
                    itemID={id}
                  />
                </div>

                <div className={`amount-block`}>
                  <div className={`actions`}>
                    <button
                      className="plus"
                      style={{ backgroundImage: `url(${PlusSquare})` }}
                      onClick={() => {
                        this.props.amountIncrement(item)
                      }}></button>

                    <div className={`quantity`}>{item.quantity}</div>
                    <button
                      className="minus"
                      style={{ backgroundImage: `url(${MinusSquare})` }}
                      onClick={() => {
                        this.props.itemRemove(item)
                      }}></button>
                  </div>
                  <CartGallery styleOf={`${this.props.styleOf}`} images={item.item.gallery} />
                </div>
              </div>
            )
          })}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  currency: state.cart.currency,
})

const mapDispatchToProps = (dispatch) => ({
  itemRemove: (state) => dispatch(removeFromCartAC(state)),
  amountIncrement: (state) => dispatch(addToCartAC(state)),
  change: (attr, id) => dispatch(changeAttributeAC(attr, id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
