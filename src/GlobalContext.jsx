import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [estilo, setEstilo] = React.useState({
    titulo: 'Titulo aqui',
    texto: 'Texto aqui',
    background: '#AAA',
  });
  const [cardList, setCardList] = React.useState([]);

  function escreverTitulo({ target }) {
    setEstilo({ ...estilo, titulo: target.value || 'Titulo aqui' });
  }

  function escreverConteudo({ target }) {
    setEstilo({ ...estilo, texto: target.value || 'Texto aqui' });
  }

  function selecionarCor(cor) {
    setEstilo({...estilo, background: cor})
  }

  function adicionarCard() {
    setCardList([...cardList, estilo])
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
