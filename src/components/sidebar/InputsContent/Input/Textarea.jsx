import React from 'react';

const Textarea = ({ inputName, setEstilo, estilo }) => {
  function escreverConteudo({ target }) {
    setEstilo({ ...estilo, texto: target.value || 'Texto aqui' });
  }
  return (
    <div>
      <label htmlFor="content">{inputName}</label>
      <textarea
        id="content"
        className="textContent"
        onChange={escreverConteudo}
      ></textarea>
    </div>
  );
};

export default Textarea;
