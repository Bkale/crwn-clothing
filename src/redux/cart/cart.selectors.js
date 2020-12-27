import { createSelector } from 'reselect';

const selecCart = state => state.cart;

export const selectCartItems = createSelector(
  [selecCart],
  cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accumalatedQuantity, cartItem) => 
      accumalatedQuantity + cartItem.quantity, 0
  )
)