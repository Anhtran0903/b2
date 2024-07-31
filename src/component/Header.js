import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import CartHome from '../page/CartHome';

export default function Header() {
    const [collapsed, setCollapsed] = useState(true);
    const {item} =useSelector(state=>state.cart)
    const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
       <Navbar color="faded" expand="md">
        <NavbarBrand href="/" className="me-auto">
          reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem >
              <NavLink><Link to={"/list"}>list</Link></NavLink>
            </NavItem>
          
          </Nav>
          <Nav navbar>
            <NavItem >
              <NavLink><Link to={"/cart"}>cart</Link></NavLink>
            </NavItem>
          
          </Nav>
        </Collapse>
        <Collapse isOpen={!collapsed} navbar>
        <span >  <Link to={"/cart"}>{item.length}</Link>  </span>
        </Collapse>
      </Navbar>
    </div>
  )
}
