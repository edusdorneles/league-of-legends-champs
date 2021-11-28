import { useState } from "react"
import { useGlobal } from "providers/Global"

// Components
import Header from "components/Header/Header"
import ChampionCard from "components/ChampionCard/ChampionCard"
import Pagination from "components/Pagination/Pagination"

// Styles
import { Container, ContainerItems } from "styles/Global"


const App = () => {
  const { champions } = useGlobal();

  // Pagination
  const itemsPerPage = 30;
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(Object.keys(champions).length / itemsPerPage);
  const startIdx = currentPage * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const currentItems = Object.keys(champions).slice(startIdx, endIdx);
  

  return (
    <div>
      <Header />

      <Container>
        <ContainerItems>
          {currentItems.map((champion: any, idx: number) => (
            <ChampionCard key={idx} champion={champions[champion]} />
          ))}
        </ContainerItems>

        <Pagination 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} 
          pages={pages} 
        />
      </Container>
    </div>
  )
}

export default App