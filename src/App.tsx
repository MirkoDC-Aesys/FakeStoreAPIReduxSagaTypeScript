import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Products from './features/products/Products'
import Product from './features/product/Product';

function App() {
  return (
    <div className="App">
      <h2>Shop</h2>
      <Router>
        <Switch>
          <Route path='/' exact component={Products} />
          <Route path={`/product/:id`} component={Product} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
