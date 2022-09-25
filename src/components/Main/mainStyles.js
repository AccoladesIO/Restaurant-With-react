import styled from "styled-components";
import Imgbg from '../../image/offerbgimg.jpg'
import SectionImg from '../../image/grow-lazy.jpg'
import { FaCreditCard, FaWallet } from 'react-icons/fa';

export const GridWrap = styled.div`
    width: 90%;
    margin: auto;
    background: url(${SectionImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    h2{
        font-size:2.4rem;
        color: #333;
        margin-bottom: 6px;
    }
    h3{
        font-size: 1.8rem;
        color: #555;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 700px;
    z-index: 1;
    gap: 2rem;
    margin-top: 2rem;
    @media screen and (max-width: 428px){
            grid-template-columns: 1fr;
    }
    
    .cell{
    background: linear-gradient(to right, rgba(255, 255, 255, 0.2), black), url(${Imgbg});
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
    gap: 1rem;
    flex-direction: column;
    box-shadow: 0px 0px 3px #333;

    user-select: none;
   
`
export const CreditCard = styled(FaCreditCard)`
    color: orangered;
    font-size: 3rem;
    display: block;
    font-size: 6rem;
    padding: 1rem;
    cursor: pointer;
    z-index: 1;
    
    &:hover{
        transform: scale(1.2);
        transition: all 0.4s ease-in-out;
    }
`;
export const Wallet = styled(FaWallet)`
    color: orangered;
    font-size: 3rem;
    display: block;
    font-size: 6rem;
    padding: 1rem;
    cursor: pointer;
    z-index: 1;
    
    &:hover{
        transform: scale(1.2);
        transition: all 0.4s ease-in-out;
    }
`;
