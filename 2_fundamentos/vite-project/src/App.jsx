import './App.css'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import BomDia from './components/BomDia'
import Pai from './components/Pai'
import Descricao from './components/Descricao'
import Cachorro from './components/Cachorro'
import Counter from './components/Counter'
import UserInfoForm from './components/UserInfoForm'
import Button from './components/Button'
import PaiFunction from './components/PaiFunction'
import Form from './components/Form'
import RenderCondicional from './components/RenderCondicional'
import LoginButton from './components/LoginButton'

function App() {
  

  return (
    <>
      {/* 6.1 - Criação de componentes */}
      <Welcome/>
      <Hello/>
      {/* 6.2 - Expressões do JSX */}
      <BomDia/>
      {/*6.3 - Componente dentro de componente*/}
      <Pai/>
      {/*6.4 - Props  */}
      <Descricao nome="Douglas" idade="31 anos"/>
      {/*6.5 - Desestruturação de props */}
      <Cachorro nome="Thor" raca="Pastor Alemão"/>
      {/*6.6 - usestate -> hook */}
      <Counter/>
      {/*6.7 - multiplos estados */}
      <UserInfoForm/>
      {/*6.8 - Eventos */}
      <Button/>
      {/*6.9 - Passando funções de manipulação de eventos como props */}
      <PaiFunction/>
      {/*6.10 - Eventos de form*/}
      <Form/>
      {/*6.11 - Renderização condicional */}
      <RenderCondicional user={"Douglas"}/>
      {/*6.12 - Expressão ternária */}
      <LoginButton loggedIn={false}/>
      <LoginButton loggedIn={true}/>
    </>
  )
}

export default App
