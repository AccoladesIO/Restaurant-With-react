import React from "react";
import { Nav, LogoBox} from "./NavbarElements";
import LogoImg from '../../image/logo.svg'
import Lists from "../List/List";

const Navbar = () => {
  return (
    <>
      <Nav>
        <LogoBox><img src={LogoImg} alt="FoodBoard Logo" /></LogoBox>
        <Lists> {Lists.map((ListItem) =>{
          const {id, name, path} = ListItem;
          return(
          <ul>
            <li><a href={path} key={id}> {name} </a></li>
          </ul>
          )
        })}</Lists>
      </Nav>
    </>
  );
};

export default Navbar;
