import React from 'react';
// DEV DEPENDENCIES
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
//COMPONENTS
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
//UTILS
import { auth } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selector'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
//STYLED ELEMENTS
import { 
  HeaderContainer, 
  LogoContainer, 
  OptionsContainer,
  OptionLink
} from './header.styles'
//STYLE
import { ReactComponent as Logo} from '../../assets/crown.svg'
// import './header.styles.scss'

const Header = ({currentUser, hidden}) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo"/>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink  to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      { 
        currentUser ? 
        <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink> : 
        <OptionLink to="/signin">SIGN IN</OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {
      hidden ? 
      null :
      <CartDropDown />
    }
  </HeaderContainer>
  
)
const mapStateToProps = createStructuredSelector({ //automatically passes in top level state
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header)