import React, { useState } from "react";
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
import Sidebar from "../Sidebar/sidebar";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <>
          <Sidebar open={mobile} onClose={() => setMobile(false)}/>
      <Nav>
        <LogoBox>
          <img src={LogoImg} alt="FoodBoard Logo" />
        </LogoBox>
        <Bars onClick={() => setMobile(true)}/>
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
