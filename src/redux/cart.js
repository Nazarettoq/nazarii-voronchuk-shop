import { addItemToCart, removeItemFromCart, changeAttribute } from './cart.utils'
import {
  PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  LOAD_CURRENT_ITEM,
  SET_CATEGORY,
  SET_CURRENCY,
  CHANGE_ATTRIBUTE,
  SET_MODAL,
} from './actions'

const INITIAL_STATE = {
  products: [],
  cart: [],
  category: '',
  currentItem: [],
  currency: 0,
  isModal: false,
}

function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PRODUCTS:
      return {
        ...state,
        products: action.state,
      }

    case ADD_TO_CART:
      return {
        ...state,
        cart: addItemToCart(state.cart, action.state),
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: removeItemFromCart(state.cart, action.state),
      }
    case LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      }
    case SET_CATEGORY:
      return {
        ...state,
        category: action.state,
      }
    case SET_CURRENCY:
      return {
        ...state,
        currency: action.state,
      }
    case CHANGE_ATTRIBUTE:
      return {
        ...state,
        cart: changeAttribute(state.cart, action.payload),
      }
    case SET_MODAL: {
      return {
        ...state,
        isModal: action.payload,
      }
    }
    default:
      return state
  }
}

export default cart
