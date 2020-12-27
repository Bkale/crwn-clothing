import CartActionTypes from './cart.types';

export const togggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})