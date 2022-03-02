import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/Homepage';
import ShopPage from './pages/shop/ShopPage'
import './App.css';



const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
