import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/Homepage';
import ShopPage from './pages/shop/ShopPage'
import Header from './components/header/Header';
import SignInAndSignUp from './pages/signin-and-signup/SignInAndSignUp';
import './App.css';



const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
