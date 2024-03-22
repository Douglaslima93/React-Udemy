import React from 'react'

const Descricao = (props) => {
  return (
    <div>
      <p>Seu nome é: {props.nome}</p>
      <p>Sua idade é: {props.idade}</p>
    </div>
  )
}

export default Descricao
