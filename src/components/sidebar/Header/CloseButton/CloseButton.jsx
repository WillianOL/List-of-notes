import React from 'react';
import closeIcon from '../img/close-sidebar-icon.png';
import './CloseButton.scss';

const CloseButton = ({ setClose, close }) => {
  function closeSidebar() {
    if (close === 'close') {
      setClose('');
    } else setClose('close');
  }

  return (
    <button className="close_button" onClick={closeSidebar} style={{transform: close ? "rotate(180deg)" : ""}}>
      <img src={closeIcon} alt="close sidebar icon" />
    </button>
  );
};

export default CloseButton;
