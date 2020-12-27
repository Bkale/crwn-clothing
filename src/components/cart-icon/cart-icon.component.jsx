import React from 'react';

//Dev Dependencies
import {connect} from 'react-redux'
import { togggleCartHidden} from '../../redux/cart/cart.action'

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'

const CartIcon = ({togggleCartHidden}) => (
  <div className="cart-icon" onClick={togggleCartHidden}>
    <ShoppingIcon className="shopping-icon"/>
    <span className="item-count">0</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  togggleCartHidden: () => dispatch(togggleCartHidden())
})
export default connect(
  null, 
  mapDispatchToProps
  )(CartIcon);