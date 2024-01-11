import React from 'react'
import CloseButton from './CloseButton/CloseButton'
import './Header.scss'

const Header = ({ close, setClose }) => {
  return (
    <header className='header'>
      <h1>List of notes</h1>
      <CloseButton setClose={setClose} close={close}/>
    </header>
  )
}

export default Header
