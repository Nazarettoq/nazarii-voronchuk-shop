export const CATEGORIES = 'CATEGORIES'
export const PRODUCTS = 'PRODUCTS'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const LOAD_CURRENT_ITEM = 'LOAD_CURRENT_ITEM'
export const SET_CATEGORY = 'SET_CATEGORY'
export const SET_CURRENCY = 'SET_CURRENCY'
export const CHANGE_ATTRIBUTE = 'CHANGE_ATTRIBUTE'
export const SET_MODAL = 'SET_MODAL'

export const sendProductsAC = (state) => ({
  type: PRODUCTS,
  state,
})
export const setModalAC = (status) => ({
  type: SET_MODAL,
  payload: status,
})
export const setCurrencyAC = (state) => ({
  type: SET_CURRENCY,
  state,
})

export const setCategoryAC = (state) => ({
  type: SET_CATEGORY,
  state,
})

export const addToCartAC = (state) => {
  return {
    type: ADD_TO_CART,
    state,
  }
}

export const removeFromCartAC = (state) => {
  return {
    type: REMOVE_FROM_CART,
    state,
  }
}

export const loadCurrentItemAC = (item) => {
  return {
    type: LOAD_CURRENT_ITEM,
    payload: item,
  }
}

export const changeAttributeAC = (attr, itemID) => {
  return {
    type: CHANGE_ATTRIBUTE,
    payload: {
      attr,
      itemID,
    },
  }
}
