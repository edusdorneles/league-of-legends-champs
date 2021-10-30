import styled from "styled-components";

export const PaginationStyle = styled.div`
    width: 100%;
    margin: 20px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
`;

export const PaginationButton = styled.button`    
    background-color: white;
    padding: 8px 10px;
    margin: 0px 5px;
    border-radius: 4px;
    border: 1px solid gray;
    transition: all .2s;
    cursor: pointer;

    &:hover {
        background-color: #ddd;
    }

    &.active {
        background-color: #2C2F3E;
        color: white;
        border: none;
    }
`