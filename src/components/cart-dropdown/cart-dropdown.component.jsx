import React from 'react'
//Dev Dependency
import { connect } from 'react-redux'
import CustomButtom from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

//Components
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'

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

const mapStateToProps = ({cart: {cartItems}}) => ({
  cartItems
})
export default connect(mapStateToProps, null)(CartDropDown);