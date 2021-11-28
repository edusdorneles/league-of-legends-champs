// Styles
import { PaginationStyle, PaginationButton } from "./styles";

// Interfaces
interface IPagination {
    currentPage: number;
    setCurrentPage: any;
    pages: number;
}


const Pagination: React.FC<IPagination> = ({ currentPage, setCurrentPage, pages }) => {
    return (
        <PaginationStyle>
            {Array.from(Array(pages), (champion, idx) => (
                <PaginationButton 
                    key={idx}
                    value={idx} 
                    onClick={(e: any) => {setCurrentPage(Number(e.target.value))}}                    
                    className={(currentPage === idx) ? 'active' : undefined}
                >
                    {idx + 1}
                </PaginationButton>
            ))}
        </PaginationStyle>
    )
}

export default Pagination;