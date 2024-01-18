import React from 'react';
import { MdDelete } from 'react-icons/md';
import { GlobalContext } from '../../../GlobalContext';

const ButtonDelete = () => {
  const botao = React.useRef()
  const {deletarCard} = React.useContext(GlobalContext)

  return (
    <button ref={botao} onClick={() => deletarCard(botao)}>
      <MdDelete />
    </button>
  );
};

export default ButtonDelete;
