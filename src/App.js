import React from 'react';
// DEV DEPENDENCIES
import { Route, Switch, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
//COMPONENTS
import Header from './components/header/header.component'
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Homepage from './pages/homepage/homepage.component'
import Shop from  './pages/shop/shop.component'
//UTILS
import { auth, createUSerProfileDocument } from "./firebase/firebase.utils";
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
          <Route path="/shop" component={Shop}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps , mapDispatchToProps)(App);
