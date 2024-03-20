import './App.css'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import BomDia from './components/BomDia'

function App() {
  

  return (
    <>
      {/* 6.1 - Criação de componentes */}
      <Welcome/>
      <Hello/>
      {/* 6.2 - Expressões do JSX */}
      <BomDia/>
      
    </>
  )
}

export default App
