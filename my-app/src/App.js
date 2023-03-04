import React from 'react';

import './App.css';
import Header from './components/Header';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
<Header />

<main>
  <Section title="Meus Jogos" 
  subtitle="Os games que eu mais curto jogar!" />

    <Section title="Canais e Streamers" 
  subtitle="Lista de canais e transmissões que eu não perco" />
</main>
    </div>
  );
}

export default App;