import React from 'react';
import './CardVisualization.scss';
import { GlobalContext } from '../../../GlobalContext';

const CardVisualization = () => {
  const { estilo } = React.useContext(GlobalContext);
  const { titulo, texto, background } = estilo;

  return (
    <div className="cardVisualization">
      <p>Visualization</p>
      <div className="cardExemple" style={{ backgroundColor: background }}>
        <h1>{titulo}</h1>
        <p>{texto}</p>
      </div>
    </div>
  );
};

export default CardVisualization;
