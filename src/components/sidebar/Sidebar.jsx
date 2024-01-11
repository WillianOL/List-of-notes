import React from 'react';
import Header from './Header/Header';
import "./Sidebar.scss"

const Sidebar = () => {
  const [close, setClose] = React.useState('')

  return (
    <section className={`sidebar ${close}`}>
      <Header close={close} setClose={setClose} />
    </section>
  )
}

export default Sidebar