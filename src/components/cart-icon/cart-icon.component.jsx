import React from 'react';

//Dev Dependencies
import {connect} from 'react-redux'
import { togggleCartHidden} from '../../redux/cart/cart.action'
//Utils
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'

const CartIcon = ({togggleCartHidden, itemCount}) => (
  <div className="cart-icon" onClick={togggleCartHidden}>
    <ShoppingIcon className="shopping-icon"/>
    <span className="item-count">{itemCount}</span>
  </div>
)
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
})
const mapDispatchToProps = dispatch => ({
  togggleCartHidden: () => dispatch(togggleCartHidden())
})
export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(CartIcon);