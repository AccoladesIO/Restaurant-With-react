import styled from "styled-components";
import Imgbg from '../../image/offerbgimg.jpg'
import { FaCreditCard } from 'react-icons/fa';

export const GridWrap = styled.div`
    width: 90%;
    margin: auto;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 900px;
    z-index: 1;
    gap: 2rem;
    margin-top: 2rem;
    @media screen and (max-width: 428px){
            grid-template-columns: 1fr;
    }
    
    .cell{
    background: linear-gradient(to right, #ff0000d6, #ff4500e6), url(${Imgbg});
    background-position: center;
    background-size: cover;
    grid-column: 1/3;
    border-radius: 5px;
    position: relative;
    box-shadow: none;
    @media screen and (max-width: 428px){
            grid-column: 1;
    }
}
`;

export let Wrap = styled.div`
    background: azure;
    border: 1px solid lavender;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 0px 3px #333;

    h2{
        font-size:2.4rem;
        color: #333;
    }
`
export const CreditCard = styled(FaCreditCard)`
  color: #fff;
  font-size: 1.6rem;
    display: block;
    font-size: 1.4rem;
    cursor: pointer;
`;