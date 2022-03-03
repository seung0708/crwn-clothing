import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/Homepage';
import ShopPage from './pages/shop/ShopPage'
import Header from './components/header/Header';
import SignInAndSignUp from './pages/signin-and-signup/SignInAndSignUp';
import './App.css';
import { auth } from './firebase/firebase.utils';


class App extends Component {
  constructor(props) {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubsribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})

      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
