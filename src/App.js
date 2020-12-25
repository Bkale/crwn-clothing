import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component'
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Homepage from './pages/homepage/homepage.component'
import Shop from  './pages/shop/shop.component'
import { auth } from "./firebase/firebase.utils";
import './App.css';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/signin" component={SignInAndSignUpPage}></Route>
          <Route path="/shop" component={Shop}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
