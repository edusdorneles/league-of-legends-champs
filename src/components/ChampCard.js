import React from 'react'

// Styles
import { ChampCardContainer } from '../styles/ChampCard';

const ChampCard = ({ champion }) => {
    return (
        <ChampCardContainer>
            {
                champion &&
                <div className="champion__container">
                    <div className="champion__image">
                        <img src={`https://ddragon.leagueoflegends.com/cdn/11.21.1/img/champion/${champion.image.full}`} alt={champion.name} />
                    </div>

                    <div className="champion__info">
                        <h4>{champion.name}</h4>
                        <p>{champion.title}</p>
                    </div>
                </div>
            }
        </ChampCardContainer>
    )
}

export default ChampCard;