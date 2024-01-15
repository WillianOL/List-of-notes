import React from 'react';
import Header from './Header/Header';
import "./Sidebar.scss"
import CardVisualization from './CardVisualization/CardVisualization';
import InputsContent from './InputsContent/InputsContent';
import ColorBar from './ColorBar/ColorBar';

const Sidebar = () => {
  const [close, setClose] = React.useState('')

  return (
    <section className={`sidebar ${close}`}>
      <Header close={close} setClose={setClose} />
      <CardVisualization/>
      <InputsContent />
      <ColorBar />
    </section>
  )
}

export default Sidebar