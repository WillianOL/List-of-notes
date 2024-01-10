import React from 'react'
import closeIcon from '../img/close-sidebar-icon.png'
import './CloseButton.scss'

const CloseButton = () => {
  return (
    <button className='close_button'>
      <img src={closeIcon} alt="close sidebar icon" />
    </button>
  )
}

export default CloseButton
