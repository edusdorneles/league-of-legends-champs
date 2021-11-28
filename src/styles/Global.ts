import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;        
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        background-color: ${props => props.theme.colors.background};
    }

    html, body, #root {min-height: 100vh}
`;

export const Container = styled.div`    
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    
    /* Adaptação para mobile */
    @media (min-width: 768px) {
        width: 750px;
    }
`;

export const ContainerItems = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    /* Adaptação para mobile */
    @media (min-width: 768px) {        
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 15px;
        grid-row-gap: 15px;
    }
`;