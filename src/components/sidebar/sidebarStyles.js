import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const SideMenu = styled.div`
    width: 0%;
  @media screen and (max-width: 768px) {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: space-evenly;
    position: absolute;
    align-items: center;
    top: 0;
    width: 300px;
    height: 80vh;
    right: 0;
    transition: all 0.4s ease-in-out;
    background: linear-gradient(to bottom, #ff0000d6, #ff4500e6);
    color: white;
    z-index: 1000;
    padding: 3rem;
  }
`;
  
export const SideLink = styled(Link)`
  color: #fff;
  display: flex;
  /* border: 1px solid white; */
  align-items: center;
  text-decoration: none;
  padding: 1rem 1rem 0 1rem;
  height: 100%;
  font-size: 1.8rem;
  position: relative;
  cursor: pointer;
  &.active {
    color: #000000;
  }
  &::after{
    content: "";
    position: absolute;
    top: 2.5rem;
    left: 2px;
    height: 100%;
    background-color: white;
    width: 3px;
    height: 3px;
    border-radius: 5px;
    color: lavender;
    font-size: 3.3rem;
}
&:hover::after{
    height: 50%;
    transition: 0.4s;
}
`;
  

export const SideBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {

  }
`;
export const SideBtnLink = styled(Link)`
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
export const CancelBtn = styled.div`
    position: absolute;
    top: 16px;
    left: 16px;
    font-size: 2.4rem;
    user-select: none;
    cursor: pointer;
    color: #000;
    font-weight: bolder;

  &:hover{
    font-size: 2.8rem;
    color: white;
    transition: all 0.4s;
  }
`