import styled from "styled-components";

export const Container = styled.div`    
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;    
    
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    
    /* Adaptação para mobile */
    @media (min-width: 768px) {
        width: 750px;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 15px;
        grid-row-gap: 15px;
    }
`