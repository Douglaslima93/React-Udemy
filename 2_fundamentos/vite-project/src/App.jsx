import './App.css'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import BomDia from './components/BomDia'
import Pai from './components/Pai'
import Descricao from './components/Descricao'
import Cachorro from './components/Cachorro'
import Counter from './components/Counter'
import UserInfoForm from './components/UserInfoForm'

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
    </>
  )
}

export default App
