import React from 'react';

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

  return (
    <GlobalContext.Provider
      value={{
        estilo,
        setEstilo,
        cardList,
        setCardList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
