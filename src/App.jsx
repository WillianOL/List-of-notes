import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import CardConteiner from './components/card_conteiner/CardConteiner'
import './App.scss'

function App() {
  return (
    <main className='container'>
      <Sidebar />
      <CardConteiner />
    </main>
  )
}

export default App
