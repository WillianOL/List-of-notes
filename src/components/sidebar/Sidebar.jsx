import React from 'react';
import Header from './Header/Header';
import "./Sidebar.scss"
import CardVisualization from './CardVisualization/CardVisualization';
import { GlobalContext } from '../../GlobalContext';

const Sidebar = () => {
  const [close, setClose] = React.useState('')
  const {estilo} = React.useContext(GlobalContext)

  return (
    <section className={`sidebar ${close}`}>
      <Header close={close} setClose={setClose} />
      <CardVisualization estilo={estilo} />
    </section>
  )
}

export default Sidebar