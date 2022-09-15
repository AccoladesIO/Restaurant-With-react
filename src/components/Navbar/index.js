import React from "react";
import { LogoBox } from "./NavbarElements";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import LogoImg from "../../image/logo.svg";

const Navbar = () => {
  return (
    <>
      <Nav>
        <LogoBox>
          <img src={LogoImg} alt="FoodBoard Logo" />
        </LogoBox>
        <Bars />

        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/pricing" activeStyle>
            Pricing
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
