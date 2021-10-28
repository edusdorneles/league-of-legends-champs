import React from 'react'

// Styles
import { PaginationStyle, PaginationButton } from '../styles/Pagination';

const Pagination = ({ currentPage, setCurrentPage, pages }) => {
    return (
        <PaginationStyle>
            {Array.from(Array(pages), (champion, idx) => (
                <PaginationButton 
                    key={idx}
                    value={idx} 
                    onClick={(e) => {setCurrentPage(Number(e.target.value))}}                    
                    className={(currentPage === idx) ? 'active' : null}
                >
                    {idx + 1}
                </PaginationButton>
            ))}
      </PaginationStyle>
    )
}

export default Pagination;