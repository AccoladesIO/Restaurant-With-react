import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';

export const Nav = styled.nav`
background: #ff0000d6;
padding: 2rem;
width: 100%;
color: #ff0000d6;
background-color: whitesmoke;
display: flex;
justify-content: space-between;
align-items: center;
font-weight: bold;
cursor: pointer;
`;
export const LogoBox = styled.div`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
font-weight: 200;
position: absolute;
left: 3rem;

img{
    transform: scale(0.7);
}

&::after{
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    background-color: orangered;
    width: 2rem;
    height: 3px;
    border-radius: 3px;
    color: lavender;
    font-size: 3.3rem;
}
&:hover::after{
    width: 100%;
    transition: 0.4s;
}
`;

export const NavLink = styled(Link)`
color: #fff;
font-size: 2rem;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
text-decoration: none;

@media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
}
`;



// export const Bars = styled(FaPizzaSlice)`
// font-size: 2rem;
// transform: translate(-50%, -15%);
// `
