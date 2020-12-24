import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component'
import Shop from  './pages/shop/shop.component'
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/shop" component={Shop}></Route>
      </Switch>
    </div>
  );
}

export default App;
