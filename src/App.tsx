import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Products from './features/products/Products'
import Product from './features/product/Product';
import Navbar from './components/Navbar';
import Cart from './features/cart/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Products} />
          <Route path={`/product/:id`} component={Product} />
          <Route path={`/cart`} component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
