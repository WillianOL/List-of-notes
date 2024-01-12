import React from 'react'

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {
  const [estilo, setEstilo] = React.useState({
    titulo: "Titulo aqui",
    texto: "Texto aqui",
    background: "#AAA"
  })

  return (
    <GlobalContext.Provider value={{estilo, setEstilo}}>
      {children}
    </GlobalContext.Provider>
  )
}