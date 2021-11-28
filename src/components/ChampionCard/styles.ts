import styled from "styled-components";

export const ChampionCardStyle = styled.div`
    width: 100%;
    height: 60px;
    background-color: white;
    border-radius: 4px;   

    .champion__container {
        display: flex;
        align-items: center;
    }

    .champion__image {
        img {
            height: 60px;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }
    }

    .champion__info {
        padding-left: 10px;
        
        p {font-size: 14px;}
    }
`;