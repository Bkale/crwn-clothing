import React from 'react';
// DEV DEPENDENCIES
import { Route, Switch, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect'
//COMPONENTS
import Header from './components/header/header.component'
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Homepage from './pages/homepage/homepage.component'
import Shoppage from  './pages/shoppage/shoppage.component'
import CheckoutPage from './pages/checkout/checkout.component'
//UTILS
import { auth, createUSerProfileDocument } from "./firebase/firebase.utils";
import { selectCurrentUser} from './redux/user/user.selector'
import './App.css';
//ACTIONS
import { setCurrentUser } from './redux/user/user.action'

class App extends React.Component{

  unSubscribeFromAuth = null;
  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      createUSerProfileDocument(userAuth)
      if(userAuth){
        const userRef = await createUSerProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/signin" render= {() => 
            this.props.currentUser ? 
              <Redirect to="/" /> : 
              <SignInAndSignUpPage />
            }
          />
          <Route path="/shop" component={Shoppage}/>
          <Route exact path="/checkout" component={CheckoutPage}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps , mapDispatchToProps)(App);
