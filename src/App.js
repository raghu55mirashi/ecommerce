import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import HomePage from './pages/homepage/homepage'
import Error from './components/error/error'
import ShopPage from './pages/shop/shop'
import Header from './components/header/header'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
