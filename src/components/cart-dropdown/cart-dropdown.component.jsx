import React from 'react'
import CustomButtom from '../custom-button/custom-button.component'

//Components
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CustomButton>GO TO CHECKOUT</CustomButton> 
    </div>
  </div>
)

export default CartDropDown