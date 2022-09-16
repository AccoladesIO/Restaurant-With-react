import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: #ff0000d6;
padding: 1rem;
width: 100%;
color: #ff0000d6;
background-color: whitesmoke;
display: flex;
justify-content: space-between;
align-items: center;
font-weight: bold;
cursor: pointer;
position: relative;
`;
export const LogoBox = styled.div`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
font-weight: 200;
font-size: 1.4rem;

img{
    transform: scale(0.7);
}
`;

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem 1rem;
  height: 100%;
  font-size: 1.4rem;
  position: relative;
  cursor: pointer;
  &.active {
    color: #000000;
  }
  &::after{
    content: "";
    position: absolute;
    bottom: 0;
    left: 2px;
    height: 100%;
    background-color: orangered;
    width: 0;
    height: 3px;
    border-radius: 3px;
    color: lavender;
    font-size: 3.3rem;
}
&:hover::after{
    width: 90%;
    transition: 0.4s;
}
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #000;
  font-size: 1.6rem;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 2rem;
    right: 1rem;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtnLink = styled(Link)`
  padding: 10px 22px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.4rem;
  color: #fff;
    outline: 1px solid #f26c4f;
    position: relative;
    overflow: hidden;
    transition: color 1s;
    background-color: #f26c4f;
    z-index: 1;
  margin-left: 24px;
  &:hover {
    color: whitesmoke;
    outline: none;
    transition: background 1s;
  }
  &::before{
    content: "";
    position: absolute;
    top: 0;
    left: -32px;
    width: 0;
    height: 100%;
    background-color: red;
    transform: skew(40deg);
    z-index: -1;
    transition: width 1s;
}
&:hover::before{
    width: 200%;
}
`;
