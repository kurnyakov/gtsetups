import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

export default function Header() {
  return (
    <header className="wrapper">
      <Navbar color="faded" light toggleable>
        <NavbarBrand to="/">Gran turismo sport</NavbarBrand>
      </Navbar>
    </header>
  );
}
