import styled from "styled-components";

export const HeaderStyle = styled.header`
    background-color: ${props => props.theme.colors.primary};
    height: 50px;    
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    
    h1 {
        color: white;
        font-size: 20px;
    }
`;