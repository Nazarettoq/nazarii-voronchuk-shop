import React from 'react'
import { connect } from 'react-redux'
import { setModalAC } from '@redux/actions'
import { totalItemCount } from '@redux/cart.utils'
import CartModal from './CartModal'
import { ReactComponent as CartIcon } from '@img/empty_cart.svg'
import '@styles/CartModal.scss'

class CartOverlay extends React.PureComponent {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleOutClick = this.handleOutClick.bind(this)
  }

  handleClick = () => {
    if (!this.props.isModal) {
      document.addEventListener('click', this.handleOutClick, false)
      document.body.classList.add('modal-open')
    } else {
      document.removeEventListener('click', this.handleOutClick, false)
      document.body.classList.remove('modal-open')
    }
    this.props.setModal(!this.props.isModal)
  }

  handleOutClick = (e) => {
    if (!this.node.contains(e.target)) this.handleClick()
  }
  componentDidMount() {
    if (this.props.isModal) {
      this.props.setModal(false)
    }
  }
  render() {
    const { cart } = this.props
    const cartItemCount = totalItemCount(cart)
    return (
      <div>
        <div
          className="cart-modal"
          ref={(node) => {
            this.node = node
          }}>
          {cartItemCount ? (
            <div className="cart-modal__count-block">
              <div className="cart-modal__count-block__value">{cartItemCount}</div>
            </div>
          ) : (
            ''
          )}

          <CartIcon onClick={this.handleClick} />
          {this.props.isModal && <CartModal closeModal={() => this.handleClick()} />}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  currency: state.cart.currency,
  isModal: state.cart.isModal,
})
const mapDispatchToProps = (dispatch) => ({
  setModal: (status) => dispatch(setModalAC(status)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartOverlay)
