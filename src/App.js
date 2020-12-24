import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component'
import Homepage from './pages/homepage/homepage.component'
import Shop from  './pages/shop/shop.component'
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/shop" component={Shop}></Route>
      </Switch>
    </div>
  );
}

export default App;
