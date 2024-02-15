import React from 'react';
import { MdDelete } from 'react-icons/md';
import { GlobalContext } from '../../../GlobalContext';

const ButtonDelete = () => {
  const botao = React.useRef();
  const { cardList, setCardList } = React.useContext(GlobalContext);
  
  function deletarCard({ current }) {
    const { id } = current.parentElement.dataset;
    // Filtra todos os cards que não tiverem o id do card clicado
    const cardFilter = cardList.filter((item) => {
      return item.id !== +id;
    });
    // setanto um novo estado com a lista sem o card excluido
    setCardList([...cardFilter]);
    // Atualiza o localStorage
    localStorage.setItem('cards', JSON.stringify(cardFilter));
  }

  return (
    <button ref={botao} onClick={() => deletarCard(botao)}>
      <MdDelete />
    </button>
  );
};

export default ButtonDelete;
