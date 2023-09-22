import React from "react";
import Word from './Word';
import { ILetter } from "../interfaces/ILetter";

interface SettingsInstructions {
    closeModal: () => void
}

const Instructions = ({closeModal}: SettingsInstructions) => {

    const words: ILetter[] = [
        {letter: 'G', type: 2, color: 1},
        {letter: 'A', type: 1, color: 1},
        {letter: 'T', type: 1, color: 1},
        {letter: 'O', type: 1, color: 1},
        {letter: 'S', type: 1, color: 1}
    ];

    const wordsWrongPosition: ILetter[] = [
        {letter: 'V', type: 1, color: 1},
        {letter: 'O', type: 1, color: 1},
        {letter: 'C', type: 3, color: 1},
        {letter: 'A', type: 1, color: 1},
        {letter: 'L', type: 1, color: 1}
    ];

    const wordsWrong: ILetter[] = [
        {letter: 'V', type: 1, color: 1},
        {letter: 'O', type: 1, color: 1},
        {letter: 'C', type: 1, color: 1},
        {letter: 'A', type: 1, color: 1},
        {letter: 'L', type: 4, color: 1}
    ];
    return (
        <>
        <div className="flex flex-col pr-6 pl-10">
            <div className="mt-12">
                <h2 className="text-black text-center font-['Roboto'] text-[2.1875rem] font-extrabold leading-[normal]">Cómo jugar</h2>
            </div>
            <div className="w-[478px] mt-8">
                <p className="mt-2 text-black font-['Roboto'] text-[1.1875rem] leading-[normal]">Adivina la palabra oculta en cinco intentos.</p>
                <p className="mt-2 text-black font-['Roboto'] text-[1.1875rem] leading-[normal]">Cada intento debe ser una palabra válida de 5 letras.</p>
                <p className="mt-2 text-black font-['Roboto'] text-[1.1875rem] leading-[normal]">Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.</p>
                <p className="mt-4 text-black font-['Roboto'] text-[1.1875rem] font-bold leading-[normal]">Ejemplos</p>
            </div>
            <div className="mt-6 pl-3 pr-11">
                <Word letters={words}/>
            </div>
            
            <p className="mt-4 text-black font-['Roboto'] text-[1.1875rem] leading-[normal]">La letra <span className="text-black font-['Roboto'] text-[1.1875rem] font-bold leading-[normal]">G</span> está en la palabra y en la posición correcta.</p>
            <div className="mt-6 pl-3 pr-11">
                <Word letters={wordsWrongPosition}/>
            </div>
            <p className="mt-4 text-black font-['Roboto'] text-[1.1875rem] leading-[normal]">La letra <span className="text-black font-['Roboto'] text-[1.1875rem] font-bold leading-[normal]">C</span> está en la palabra pero en la posición incorrecta.</p>
            <div className="mt-6 pl-3 pr-11">
                <Word letters={wordsWrong}/>
            </div>
            <p className="mt-4 text-black font-['Roboto'] text-[1.1875rem] leading-[normal]">La letra <span className="text-black font-['Roboto'] text-[1.1875rem] font-bold leading-[normal]">O</span> no está en la palabra.</p>
            <p className="mt-9 w-[480px] h-[3.25rem] text-black font-['Roboto'] text-[1.1875rem] leading-[normal]">Puede haber letras repetidas. Las pistas son independientes para cada letra.</p>
            <p className="mt-8 text-center text-black font-['Roboto'] text-[1.1875rem] leading-[normal]">¡Una palabra nueva cada 5 minutos!</p>
            <div className="mt-8 mb-7 flex flex-col justify-center text-center">
                <button onClick={closeModal} className="ml-auto mr-auto items-center w-[16.4375rem] h-[3.125rem] rounded-[0.3125rem] bg-[#6aaa64] text-white font-['Roboto'] text-[1.75rem] font-extrabold leading-[normal]">!JUGAR¡</button>
            </div>
        </div>
        </>
    );
}

export default Instructions;