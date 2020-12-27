import React from 'react'
//Dev Dependency
import { connect } from 'react-redux'
import CustomButtom from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
//Components
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'
//Utils
import {selectCartItems} from '../../redux/cart/cart.selectors'

const CartDropDown = ({cartItems}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.map(cartItem => 
          <CartItem key={cartItem.id} item={cartItem}/>)
      }
      <CustomButton>GO TO CHECKOUT</CustomButton> 
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
})
export default connect(mapStateToProps, null)(CartDropDown);