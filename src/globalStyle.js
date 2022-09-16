import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
body{
    background-color: white;

}
.section-featured{
    padding: 4.6rem;
    max-width: 90%;
    margin: auto;
}
.heading-featured-in{
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 0.75px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 2.4rem;
    color: #888;
}
.logos{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 2rem;
}
.logos img{
    height: 2.2rem;
    filter: brightness(0);
    opacity: 50%;
    &:hover{
        filter: brightness(1);
        opacity: 100%;
        transition: 0.4s ease-in-out;
    }
    @media screen and (max-width: 428px){
        height: 2rem;
    }
}
`