import React from 'react'

const LoginButton = ({ loggedIn }) => {
  return (
    <div>
      {loggedIn ? <button>sair</button> : <button>entrar</button>}
    </div>
  )
}

export default LoginButton
