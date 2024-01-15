import React from 'react';
import { IoColorFill } from 'react-icons/io5'
import ColorSelector from './ColorSelector/ColorSelector';
import "./ColoBar.scss"

const ColorBar = () => {

  return (
    <div className='color_bar'>
      <p>Cor <IoColorFill /></p>
      <ul>
        <ColorSelector color={"#C5FED6"}/>
        <ColorSelector color={"#FFB4BB"}/>
        <ColorSelector color={"#DEC9FF"}/>
        <ColorSelector color={"#A9EAF9"}/>
      </ul>
    </div>
  );
};

export default ColorBar;
