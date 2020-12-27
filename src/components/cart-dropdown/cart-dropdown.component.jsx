import React from 'react'
//Dev Dependency
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'
//Components
import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'
//Utils
import {selectCartItems} from '../../redux/cart/cart.selectors'
import { togggleCartHidden } from '../../redux/cart/cart.action'

const CartDropDown = ({cartItems, history, dispatch}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length?
          cartItems.map(cartItem => 
            <CartItem key={cartItem.id} item={cartItem}/>) :
          <span className="empty-message">Your cart is empty</span>
      }
      <CustomButton onClick={() => {
        history.push('/checkout')
        dispatch(togggleCartHidden())
      }}>GO TO CHECKOUT</CustomButton> 
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropDown));