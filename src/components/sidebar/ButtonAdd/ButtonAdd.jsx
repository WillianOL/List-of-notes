import React from 'react';
import './ButtonAdd.scss';
import { GlobalContext } from '../../../GlobalContext';

const ButtonAdd = () => {
  const { cardList, setEstilo, estilo, setCardList } = React.useContext(GlobalContext);
  function adicionarCard() {
    // Feito para randomizar o id do card para a key no map
    setEstilo({ ...estilo, id: Math.floor(Math.random() * 1000) });
    setCardList([...cardList, estilo]);
  }
  // Atualiza o localStorage com os cards caso o estado da lista seja modificada
  React.useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cardList));
  }, [cardList]);

  return (
    <div className="button_conteiner">
      <button className="button_add" onClick={adicionarCard}>
        Adicionar
      </button>
    </div>
  );
};

export default ButtonAdd;
