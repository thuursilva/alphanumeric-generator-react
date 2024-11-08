import React, { useState } from "react";
import SubmitButton from "./submit-button";
import Header from "./header";

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
    const [numberState, setNumberState] = useState(12)

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
        <>
            <Header />

            <section className="flex justify-center items-center py-40">
                <form className="w-1/2 border-solid border-2 rounded flex flex-col gap-3 p-5 shadow-md">

                    <input
                        type="text"
                        id="resultString"
                        placeholder="Your text will appear here!"
                        value={resultString}
                        readOnly
                        className="w-4/5 p-3 border-solid border-2 border-slate-300 rounded bg-gray-200 self-center"
                    />

                    <ul className="flex gap-3 pt-4">
                        <li>
                            <input type="checkbox" id="number" name="numberChecked" checked={stateCheck.numberChecked} onChange={handleChecked} />
                            <label className="pl-1" htmlFor="number">Numbers</label>
                        </li>
                        <li>
                            <input type="checkbox" id="letter" name="letterChecked" checked={stateCheck.letterChecked} onChange={handleChecked} />
                            <label className="pl-1" htmlFor="letter">Letters</label>
                        </li>
                        <li>
                            <input type="checkbox" id="stringUppercase" name="stringUppercaseChecked" checked={stateCheck.stringUppercaseChecked} onChange={handleChecked} />
                            <label className="pl-1" htmlFor="stringUppercase">Uppercase Letters</label>
                        </li>
                        <li>
                            <input type="checkbox" id="specialCharacter" name="specialCharacterChecked" checked={stateCheck.specialCharacterChecked} onChange={handleChecked} />
                            <label className="pl-1" htmlFor="specialCharacter">Special Characters</label>
                        </li>
                    </ul>

                    <div className="flex gap-2 items-center pt-2">
                        <label htmlFor="stringLength">Characters Length: </label>
                        <input
                            type="number"
                            id="stringLength"
                            name="numberState"
                            value={numberState}
                            onChange={handleNumber}
                            min={1}
                            max={70}
                            className="border-solid border-2 border-slate-300 rounded text-center"
                        />
                    </div>

                    <SubmitButton onClick={handleSubmit} />
                </form>
            </section>
        </>

    )
}

function generateString(length: number, options: {
    letterChecked: boolean,
    numberChecked: boolean,
    specialCharacterChecked: boolean,
    stringUppercaseChecked: boolean

}) {
    let resultString = ''
    let characters = ''

    if (options.letterChecked) {
        characters += 'abcdefghijklmnopqrstuvwxyz'
    }

    if (options.numberChecked) {
        characters += '0123456789'
    }

    if (options.specialCharacterChecked) {
        characters += '!@#$%^&*()_+[]{}|;:,.<>?'
    }

    if (options.stringUppercaseChecked) {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }

    const charactersLength = characters.length

    if (characters.length === 0) {
        console.warn('Nenhuma opção de caractere selecionada. Adicione pelo menos uma.');
        return '';
    }

    for (let counter = 0; counter < length; counter++) {
        resultString += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    return resultString

}

export default Form