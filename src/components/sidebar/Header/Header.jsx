import React from 'react'
import CloseButton from './CloseButton/CloseButton'
import './Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <h1>List of notes</h1>
      <CloseButton />
    </header>
  )
}

export default Header
