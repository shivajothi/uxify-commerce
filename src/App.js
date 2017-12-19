import React, { Component } from 'react';
import './App.css';
import ProductDetail from './pages/productDetail/productDetail'
import Header from './widgets/header/header'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <ProductDetail />
      </div>
    );
  }
}

export default App;
