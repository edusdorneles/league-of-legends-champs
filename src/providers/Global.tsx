import React, { useState, useEffect } from "react";

// Interfaces
interface IGlobalContext {
    champions: any,
    setChampions: React.Dispatch<React.SetStateAction<{}>>
}

// Valores default
const DEFAULT_VALUE = {
    champions: {},
    setChampions: () => {}
}


const GlobalContext = React.createContext<IGlobalContext>(DEFAULT_VALUE);

export const GlobalProvider: React.FC = ({ children }) => {
    const [champions, setChampions] = useState({});

    const fetchData = () => {
        const api = 'https://ddragon.leagueoflegends.com/cdn/11.21.1/data/pt_BR/champion.json';

        fetch(api)
            .then(response => {
                if(response.ok) {
                    return response.json();
                } else {
                    alert('Ocorreu erro na requisição!');
                }
            })
            .then(data => {
                if(data) {
                    setChampions(data.data);
                }
            });
    }

    useEffect(() => {
        fetchData();
    }, []);


    return(
        <GlobalContext.Provider 
            value={{
                champions,
                setChampions
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

// Criando um hook do context
export const useGlobal = () => React.useContext(GlobalContext);