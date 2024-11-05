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

    const [resultString, setResultString] = useState('')

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        const generatedString = generateString(numberState, stateCheck)
        setResultString(generatedString)
    }

    return (
        <form>
            <h2>Alphanumeric Generator</h2>

            <input type="text" id="resultString" placeholder="Your text will appear here!" value={resultString} readOnly></input>

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

            <SubmitButton onClick={handleSubmit}/>
        </form>
    )
}

function generateString(length: number, options: {
    letterChecked: boolean,
    numberChecked: boolean,
    specialCharacterChecked: boolean,
    stringUppercaseChecked: boolean

}){
    let resultString = ''
    let characters = ''

    if(options.letterChecked){
        characters += 'abcdefghijklmnopqrstuvwxyz'
    }

    if(options.numberChecked){
        characters += '0123456789'
    }

    if(options.specialCharacterChecked){
        characters += '!@#$%^&*()_+[]{}|;:,.<>?'
    }

    if(options.stringUppercaseChecked){
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }

    const charactersLength = characters.length

    if (characters.length === 0) {
        console.warn('Nenhuma opção de caractere selecionada. Adicione pelo menos uma.');
        return '';
    }

    for (let counter = 0; counter < length; counter ++) {
        resultString += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    return resultString
    
  }

export default Form