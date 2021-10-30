import styled from 'styled-components';

export const SearchStyle = styled.div`    
    margin: 20px 0px;

    input, button {
        height: 45px;
        border: none;
        border-radius: 0;
        outline: none;
        font-size: 14px;
    }

    input {
        width: 75%;
        padding: 0px 15px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        border-top: 1px solid gray;
        border-left: 1px solid gray;
        border-bottom: 1px solid gray;
    }

    button {
        width: 25%;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;        
        cursor: pointer;
        background-color: #2C2F3E;
        color: white;
        transition: all .2s;

        &:hover {
            background-color: #16171F;
        }
    }


    /* Adaptação para mobile */
    @media (min-width: 768px) {        
        input {width: 85%}
        button {width: 15%}
    }
`