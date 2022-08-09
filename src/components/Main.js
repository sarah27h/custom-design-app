import React, { Component } from 'react';
import Nav from './Nav.js';
import Products from './Products.js';
import Footer from './Footer.js';

class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Products />
        <Footer />
      </div>
    );
  }
}

export default Main;
