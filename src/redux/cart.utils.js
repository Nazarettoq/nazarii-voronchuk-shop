export const addItemToCart = (cartItems, cartItemToAdd) => {
  if (cartItemToAdd.savedAttribute !== undefined) {
    const isMatch = cartItems.find((item) => item.item.name === cartItemToAdd.item.name)
    const other = cartItems.find(
      (item) =>
        item.savedAttribute &&
        item.savedAttribute.every((e, i) => e.item.id === cartItemToAdd.savedAttribute[i].item.id),
    )

    if (other && isMatch) {
      return cartItems.map((cartItem) =>
        cartItem.savedAttribute &&
        cartItem.savedAttribute.every(
          (e, i) => e.item.id === cartItemToAdd.savedAttribute[i].item.id,
        )
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      )
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
  } else {
    const isMatch = cartItems.find((item) => item.item.name === cartItemToAdd.item.name)

    if (isMatch) {
      return cartItems.map((cartItem) =>
        cartItem.item.name === cartItemToAdd.item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      )
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
  }
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  if (cartItemToRemove.savedAttribute) {
    const cartCheck = cartItems.find(
      (cartItem) =>
        cartItem.item.name === cartItemToRemove.item.name &&
        cartItem.savedAttribute.every((e, i) => {
          return e.item.id === cartItemToRemove.savedAttribute[i].item.id
        }),
    )
    if (cartCheck.quantity === 1) {
      return cartItems.filter((cartItem) => {
        return !isEqual(cartItem.savedAttribute, cartItemToRemove.savedAttribute)
      })
    }
    return cartItems.map((cartItem) =>
      cartItem.savedAttribute &&
      cartItem.savedAttribute.every(
        (e, i) => e.item.id === cartItemToRemove.savedAttribute[i].item.id,
      )
        ? {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          }
        : cartItem,
    )
  } else {
    const isMatch = cartItems.find((item) => item.item.name === cartItemToRemove.item.name)
    if (isMatch.quantity === 1) {
      return cartItems.filter((item) => item.item.name !== cartItemToRemove.item.name)
    }
    return cartItems.map((item) =>
      item.item.name === cartItemToRemove.item.name
        ? {
            ...item,
            quantity: item.quantity - 1,
          }
        : item,
    )
  }
}
const isEqual = (object1, object2) => {
  return JSON.stringify(object1) === JSON.stringify(object2)
}
export const changeAttribute = (cartItems, attributeToChange) => {
  const { attr, itemID } = attributeToChange
  return cartItems.map((item) =>
    item === itemID
      ? {
          ...item,
          savedAttribute: item.savedAttribute.map((item) =>
            item.name === attr.name ? attr : item,
          ),
        }
      : item,
  )
}
export function getTotalPrice(cart, selectedCurr) {
  const totalPrice = cart.reduce((total, curr) => {
    const price = curr.item.prices[selectedCurr].amount * curr.quantity
    return (total += price)
  }, 0)
  return Math.round(totalPrice * 100) / 100
}
export function taxCount(total, tax) {
  if (total === 0) return total
  return ((total / 100) * tax).toFixed(2)
}

export function totalItemCount(cart) {
  return Object.values(cart).reduce((total, curr) => {
    total += curr.quantity
    return total
  }, 0)
}
