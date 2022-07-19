import React, { Component } from 'react';
import { Navbar, NavbarBrand} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./styles.css";
class Header extends Component {
  render() {
    return(
    <React.Fragment>
      <Navbar sticky="top" id='header'>
        <div className="container-fluid">
            <NavbarBrand href="/">MyShopping</NavbarBrand>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="Navbar">
                <ul class="navbar-nav mr-auto" id='itemNav'>
                    {/* <li class="nav-item"><a class="nav-link active" href="/">Home</a></li> */}
                    <li class="nav-item">
                      <NavLink className='nav-link' to={"/"}>
                        Home
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink className='nav-link' to={"/shop"}>
                        Shop
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink className='nav-link' to={"/a"}>
                        About
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink className='nav-link' to={"/b"}>
                        Contact
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink className='nav-link' to={"/c"}>
                        <span class="fa fa-shopping-bag"></span>
                      </NavLink>
                    </li>
                </ul>
            </div>
        </div>
      </Navbar>
    </React.Fragment>
    );
  }
}

export default Header;