import React, { useState, useEffect } from 'react';

const GlobalContext = React.createContext({});

export const GlobalProvider = (props) => {
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
        <GlobalContext.Provider value={{ champions }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

// Criando um hook do context
export const useGlobal = () => React.useContext(GlobalContext)