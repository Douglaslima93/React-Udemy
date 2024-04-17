import { useState } from "react"

const Form = () => {
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        // Manipulação de dados
        // Validação
        // Envio ao servidor pela API
        // Loading
        // Chamada da função de mensagem de erro/bem sucedida

        event.preventDefault();
        console.log("Formulario enviado: ", value)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)}
        placeholder="Preencha o campo"
        />
        <button type="submit">Enviar</button>
    </form>
  )
}

export default Form
