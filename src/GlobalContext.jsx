import React, { useEffect } from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [estilo, setEstilo] = React.useState({
    titulo: 'Titulo aqui',
    texto: 'Texto aqui',
    background: '#AAA',
    id: Math.floor(Math.random() * 1000),
  });
  // Caso tenha itens no localStorage define como estado inicial
  const [cardList, setCardList] = React.useState(JSON.parse(localStorage.getItem('cards')) || []);

  function escreverTitulo({ target }) {
    setEstilo({ ...estilo, titulo: target.value || 'Titulo aqui' });
  }

  function escreverConteudo({ target }) {
    setEstilo({ ...estilo, texto: target.value || 'Texto aqui' });
  }

  function selecionarCor(cor) {
    setEstilo({ ...estilo, background: cor });
  }

  function adicionarCard() {
    // Feito para randomizar o id do card para a key no map
    setEstilo({ ...estilo, id: Math.floor(Math.random() * 1000) });
    setCardList([...cardList, estilo]);
  }

  function deletarCard({ current }) {
    const { id } = current.parentElement.dataset;
    // Filtra todos os cards que não tiverem o id do card clicado
    const cardFilter = cardList.filter((item) => {
      return item.id !== +id;
    });
    // setanto um novo estado com a lista sem o card excluido
    setCardList([...cardFilter]);
    // Atualiza o localStorage
    localStorage.setItem("cards", JSON.stringify(cardFilter))
  }

  return (
    <GlobalContext.Provider
      value={{
        estilo,
        setEstilo,
        escreverTitulo,
        escreverConteudo,
        selecionarCor,
        adicionarCard,
        cardList,
        deletarCard,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
