import React, { useState } from "react";
import SubmitButton from "./submit-button";
import CopyButton from "./copy_button";
import copyIcon from '../images/copy_icon.png'
import copiedIcon from '../images/copied_icon.png'
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

    const [error, setError] = useState(false)

    const handleError = (condition: boolean) => {
        if (condition) {
            setError(true)

            setTimeout(() => {
                setError(false)
            }, 3000)
        }
    }

    const [errorMessage, setErrorMessage] = useState('')

    const handleErrorMessage = (message: string) => {
        setErrorMessage(message)
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

    //usestate para copiar o texto
    const [copiedState, setCopy] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(resultString)
        setCopy(true)

        setTimeout(() => {
            setCopy(false)
        }, 2000)
    }

    return (
        <>
            <Header />

            <section className="flex justify-center items-center flex-col py-40">

                <div className={`bg-red-500 fixed top-20 right-5 py-4 px-5 max-w-64 text-white text-sm rounded-lg shadow-md transition-opacity duration-700 ease-in-out
                    ${error ? 'opacity-100' : 'opacity-0'}`}>
                    {errorMessage}
                </div>

                <form className="w-1/2 border-solid border-2 rounded flex flex-col gap-3 px-5 py-8 shadow-md">

                    <div className="flex items-center w-4/5 p-3 border-solid border-2 border-slate-300 rounded bg-gray-200 self-center">
                        <input
                            type="text"
                            id="resultString"
                            placeholder="Your text will appear here!"
                            value={resultString}
                            readOnly
                            className="flex-1 bg-gray-200 p-2 outline-none"
                        />
                        <CopyButton onClick={handleCopy} copyIcon={copyIcon} copiedIcon={copiedIcon}/>
                    </div>

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
                            max={100}
                            className="border-solid border-2 border-slate-300 rounded text-center"
                        />
                    </div>

                    <SubmitButton onClick={handleSubmit} />
                </form>
            </section>
        </>

    )

    function generateString(length: number, options: {
        letterChecked: boolean,
        numberChecked: boolean,
        specialCharacterChecked: boolean,
        stringUppercaseChecked: boolean
    }) {

        let resultString = ''
        let characters = ''

        if (length < 1) {
            setNumberState(1)
            handleError(true)
            handleErrorMessage('Length must be at least 1!')
            return ''
        } else if (length > 100) {
            setNumberState(100)
            handleError(true)
            handleErrorMessage('The length must be at most 100!')
            return ''
        }


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

        if (!options.letterChecked && !options.numberChecked && !options.specialCharacterChecked && !options.stringUppercaseChecked) {
            handleError(true)
            handleErrorMessage('At least one character type must be selected!')
            return ''
        }

        const charactersLength = characters.length

        for (let counter = 0; counter < length; counter++) {
            resultString += characters.charAt(Math.floor(Math.random() * charactersLength))
        }

        return resultString

    }
}


export default Form