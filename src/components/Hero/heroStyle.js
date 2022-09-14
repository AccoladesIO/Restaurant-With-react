import styled from 'styled-components';
import Img from '../../image/bg.svg'

export const HeroStyled = styled.section`
background: linear-gradient(to bottom, #ff0000d6, #ff4500e6), url(${Img});
background-position: center;
background-size: cover;
height: 80vh;
max-width: 100%;
color: white;
position: relative;
`
export const TextContent = styled.div`
position: absolute;
transform: translate(-50%, -50%);
top: 50%;
left: 50%;
text-align: center;

h1{
    font-size: 5rem;
    text-align: center;
}
h2{
    font-size: 3rem;
}
@media screen and (max-width: 400px){
    h1{
        font-size: 3rem;
    }
}
`;
export const Btn = styled.button`
margin-top: 2rem;
font-size: 25px;
border: none;
text-decoration: none;
text-transform: uppercase;
letter-spacing: 2px;
color: #fff;
outline: 1px solid #f26c4f;
padding: 20px 40px;
position: relative;
overflow: hidden;
transition: color 1s;
background-color: #f26c4f;
z-index: 1;

&:hover{
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
`
export const Circle = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background: white;
    border-top: 1px solid red;
    position: absolute;
    left: 50%;
    bottom: -4%;
    transform: translate(-50% );
    
    p{
        font-size: 2rem;
        color: red;
        text-align: center;
        font-weight: bolder;
        animation-name: animate;
        animation-timing-function: linear;
        animation-duration: 1.2s;
        animation-iteration-count: infinite;
        cursor: pointer;
    }
    @keyframes animate {
    0%{
        transform: translateY(-5px);
    }

    100%{
        transform: translateY(5px);
    }

}
`