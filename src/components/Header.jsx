import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCategoryAC } from '@redux/actions'
import CartModal from '@components/cart-overlay/CartOverlay'
import Currency from '@components/currency/Currency'
import '@styles/Header.scss'
import logo from '@img/logo.svg'
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__items">
          <div className="navigation">
            {this.props.categories.map((el, id) => (
              <NavLink
                to={`/${el.name}`}
                className={
                  el.name === this.props.currentCategorie
                    ? 'category-selected category'
                    : 'category'
                }
                key={id}
                onClick={() => {
                  this.props.sendCategory(el.name)
                }}>
                <div className="category__name">{el.name}</div>
              </NavLink>
            ))}
          </div>
          <div className="logo">
            <img src={logo} className="logo__centering" alt="logo" />
          </div>
          <div className="action">
            <Currency />
            <CartModal />
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendCategory: (state) => dispatch(setCategoryAC(state)),
})

export default connect(null, mapDispatchToProps)(Header)
