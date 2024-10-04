import React, {useState} from "react";
import SubmitButton from "./submit-button";

function Form() {

    //usestates de todos os inputs checkbox
    const [stateCheck, setStateCheck] = useState({
        numberChecked: true,
        letterChecked: true,
        specialCharacterChecked: false,
        stringUppercaseChecked: false
    })

    //handle único para todos os usestate, quando clicar alterar para checked ou uncheked
    const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStateCheck({ ...stateCheck, [event.target.name]: event.target.checked })
    }

    //usestate para o input number
    const [numberState, setNumberState] = useState(5)

    //handle para o input number
    const handleNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumberState(Number(event.target.value))
    }

    

    return (
        <form>
            <h2>Alphanumeric Generator</h2>

            <input type="text" id="resultString" placeholder="Your text will appear here!" disabled></input>

            <div>
                <input type="checkbox" id="number" name="numberChecked" checked={stateCheck.numberChecked} onChange={handleChecked}></input>
                <label htmlFor="number">Números</label>

                <input type="checkbox" id="letter" name="letterChecked" checked={stateCheck.letterChecked} onChange={handleChecked}></input>
                <label htmlFor="letter">Letras</label>

                <input type="checkbox" id="specialCharacter" name="specialCharacterChecked" checked={stateCheck.specialCharacterChecked} onChange={handleChecked}></input>
                <label htmlFor="specialCharacter">Caracteres Especiais</label>

                <input type="checkbox" id="stringUppercase" name="stringUppercaseChecked" checked={stateCheck.stringUppercaseChecked} onChange={handleChecked}></input>
                <label htmlFor="stringUppercase">Caracteres Maiúsculos</label>
            </div>

            <label htmlFor="stringLength">Quantidade de Caracteres</label>
            <input type="number" id="stringLength" name="numberState" value={numberState} onChange={handleNumber} min={1} max={70}></input>

            <SubmitButton />
        </form>
    )
}

function generateString(length: number){
    let resultString = ''
  
    const characters = 'abcdefghijklmnopqrstuvwxyz'
    const charactersLength = characters.length
    let counter = 0
  
    while (counter < length) {
      resultString += characters.charAt(Math.floor(Math.random() * charactersLength))
      counter += 1
    }
  
    return resultString
    
  }

export default Form