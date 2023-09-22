import { IBoard } from "../interfaces/IBoard";
import { ILetter } from "../interfaces/ILetter";
import Word from './Word';
import { useEffect, useState } from 'react';

export default function Board({ word, numberWord }: IBoard) {

    const [wordOne, setWordOne] = useState<ILetter[]>([
        { letter: '', type: 1, color: 2 },
        { letter: '', type: 1, color: 2 },
        { letter: '', type: 1, color: 2 },
        { letter: '', type: 1, color: 2 },
        { letter: '', type: 1, color: 2 },
    ]);
    const [wordTwo, setWordTwo] = useState<ILetter[]>([
        { letter: '', type: 1, color: 2 },
        { letter: '', type: 1, color: 2 },
        { letter: '', type: 1, color: 2 },
        { letter: '', type: 1, color: 2 },
        { letter: '', type: 1, color: 2 },
    ]);
    const [wordThree, setWordThree] = useState<ILetter[]>([
        { letter: '', type: 1, color: 2 },
        { letter: '', type: 1, color: 2 },
        { letter: '', type: 1, color: 2 },
        { letter: '', type: 1, color: 2 },
        { letter: '', type: 1, color: 2 },
    ]);
    const [wordFour, setWordFour] = useState<ILetter[]>([
        { letter: '', type: 1, color: 2 },
        { letter: '', type: 1, color: 2 },
        { letter: '', type: 1, color: 2 },
        { letter: '', type: 1, color: 2 },
        { letter: '', type: 1, color: 2 },
    ]);
    const [wordFive, setWordFive] = useState<ILetter[]>([
        { letter: '', type: 1, color: 2 },
        { letter: '', type: 1, color: 2 },
        { letter: '', type: 1, color: 2 },
        { letter: '', type: 1, color: 2 },
        { letter: '', type: 1, color: 2 },
    ]);

    useEffect(() => {
        switch (numberWord) {
            case 1: {
                setWordOne(word);
                break;
            }
        }
    }, [word]);

    return (<>
        <div className="mt-20 w-[424px] h-[424px] ml-auto mr-auto">
            <div className="flex flex-col flex-wrap justify-around h-full">
                <Word letters={wordOne} />
                <Word letters={wordTwo} />
                <Word letters={wordThree} />
                <Word letters={wordFour} />
                <Word letters={wordFive} />
            </div>
        </div>
    </>)
}