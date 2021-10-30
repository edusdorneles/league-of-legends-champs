import React, { useState } from 'react'

// Styles
import { SearchStyle } from '../styles/Search';

const Search = () => {
    const [search, setSearch] = useState('');

    return (
        <SearchStyle>
            <form>
                <input
                    placeholder="Pesquisar campeão:"
                    value={search}
                    onChange={(e) => {setSearch(e.target.value)}}
                />

                <button type="button">
                    Pesquisar
                </button>
            </form>
        </SearchStyle>
    )
}

export default Search;