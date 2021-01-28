import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Search from './pages/Search';
import ProductListing from './components/ProductsListing';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ Search } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
