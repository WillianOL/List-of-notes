import React from 'react'

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {
  const [estilo, setEstilo] = React.useState({
    titulo: "Titulo aqui",
    texto: "Texto aqui",
    background: "#AAA"
  })

  function escreverTitulo({target}) {
    setEstilo({...estilo, titulo: target.value || "Titulo aqui"})
  }

  function escreverConteudo({target}) {
    setEstilo({...estilo, texto: target.value || "Texto aqui"})
  }

  return (
    <GlobalContext.Provider value={{estilo, setEstilo, escreverTitulo, escreverConteudo}}>
      {children}
    </GlobalContext.Provider>
  )
}