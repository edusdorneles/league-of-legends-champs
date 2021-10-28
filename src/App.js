import React, { useState } from 'react';
import Header from './components/Header';
import ChampCard from './components/ChampCard';
import Footer from './components/Footer';
import Pagination from './components/Pagination';
import { useGlobal } from './providers/Global';

// Styles
import { Container } from './styles/Global';
import './App.css';

function App() {
  const { champions } = useGlobal();

  // Pagination
  const itemsPerPage = 30;
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(Object.keys(champions).length / itemsPerPage);
  const startIdx = currentPage * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const currentItems = Object.keys(champions).slice(startIdx, endIdx);


  return (
    <div className="container">
      <Header />

      <Container>
        {currentItems.map((champion, idx) => (
          <ChampCard key={idx} champion={champions[champion]} />
        ))}
      </Container>

      <Pagination 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} 
        pages={pages} 
      />

      <Footer />
    </div>
  );
}

export default App;