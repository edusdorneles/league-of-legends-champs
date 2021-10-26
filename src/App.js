import React from 'react';
import Header from './components/Header';
import ChampCard from './components/ChampCard';
import Footer from './components/Footer';
import { useGlobal } from './providers/Global';

// Styles
import { Container } from './styles/Global';
import './App.css';

function App() {
  const { champions } = useGlobal();

  console.log(champions['Aatrox'])

  return (
    <div className="container">
      <Header />

      <Container>
        {Object.keys(champions).map((champion, idx) => (
          <ChampCard key={idx} champion={champions[champion]} />
        ))}        
      </Container>

      <Footer />
    </div>
  );
}

export default App;