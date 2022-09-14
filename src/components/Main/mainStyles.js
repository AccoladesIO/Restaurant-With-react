import styled from "styled-components";
import Imgbg from '../../image/offerbgimg.jpg'

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
    
    
    .cell{
    background: linear-gradient(to right, #ff0000d6, #ff4500e6), url(${Imgbg});
    background-position: center;
    background-size: cover;
    grid-column: 1/3;
    border-radius: 5px;
    position: relative;
    box-shadow: none;
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
`