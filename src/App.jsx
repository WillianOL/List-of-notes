import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import CardConteiner from './components/card_conteiner/CardConteiner';
import './App.scss';
import { GlobalStorage } from './GlobalContext';

function App() {
  return (
    <main className="container">
      <GlobalStorage>
        <Sidebar />
        <CardConteiner />
      </GlobalStorage>
    </main>
  );
}

export default App;
