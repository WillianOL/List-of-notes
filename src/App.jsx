import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import CardConteiner from './components/card_conteiner/CardConteiner';
import './App.scss';
import { GlobalStorage } from './GlobalContext';

function App() {
  return (
    <GlobalStorage>
      <main className="container">
        <Sidebar />
        <CardConteiner />
      </main>
    </GlobalStorage>
  );
}

export default App;
