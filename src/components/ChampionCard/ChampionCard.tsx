// Styles
import { ChampionCardStyle } from "./styles";

// Interfaces
interface IChampion {
    key: number;
    champion: string[];
}


const ChampionCard: React.FC<IChampion> = ({ champion }: any) => {
    return (
        <ChampionCardStyle>
            <div className="champion__container">
                <div className="champion__image">
                    <img src={`https://ddragon.leagueoflegends.com/cdn/11.21.1/img/champion/${champion.image.full}`} alt={champion.name} />
                </div>

                <div className="champion__info">
                    <h4>{champion.name}</h4>
                    <p>{champion.title}</p>
                </div>
            </div>
        </ChampionCardStyle>
    )
}

export default ChampionCard;