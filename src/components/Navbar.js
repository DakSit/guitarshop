import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../guitarlogo.png';


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to='/'>
          <img src={logo} alt="store" className="navbar-brand .img-fluid. max-width: 100%; and height: auto;" />
        </Link>
        <ul className="ul.navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            products
            </Link>
        </li>
        </ul>
        <Link to='/cart' className="ml-auto">
        <button>
        <i className="glyphicon glyphicon-shopping-cart" />
          my cart
        </button>
        </Link>
      </nav>
    )
  }
}

export default Navbar;
