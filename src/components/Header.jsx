import logo from '@img/logo.svg'
import cart from '@img/empty_cart.svg'
import vector from '@img/vector.svg'
import { Component } from 'react'
import '@styles/Header.scss'
class Header extends Component{

    render(){
        return <div className="header">
        <div className="header__items">
          <div className="navigation">
            <button className="category category-selected">
              <div className="category__name">Women</div>
            </button>
            <button className="category ">
              <div className="category__name">Men</div>
            </button>

            <button className="category ">
              <div className="category__name">Kids</div>
            </button>
          </div>
          <div className="logo">
            <img src={logo} className="logo__centering" alt="logo" />
          </div>
          <div className="action">
            <div className="action__currency-switch">
              <div className="currency-symbol">$</div>
              <img className="vector" src={vector} alt="" />
            </div>
            <img className="action__purchases" src={cart} alt="cart" />
          </div>
        </div>
      </div>
    }
}
export default Header