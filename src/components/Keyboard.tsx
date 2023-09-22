import { IKey } from "../interfaces/IKey";
import { IKeyBoard } from "../interfaces/IKeyBoard";
import { ILetter } from "../interfaces/ILetter";
import Key from "./Key";
import KeyDelete from "./KeyDelete";
import KeyEnter from "./KeyEnter";
import { useState } from 'react';

const KeyBoard = ({ setWord, setNumberWord }: IKeyBoard) => {
    const [wordCurrent, setWordCurrent] = useState<ILetter[]>([]);
    let aux: ILetter[] = [];
    const [numberWord, setNumberWordCurrent] = useState<number>(1);
    const addLetter = (letter: string) => {
        if (numberWord <= 5) {
            wordCurrent.push({ letter: letter, type: 1, color: 1 });

            setNumberWordCurrent(numberWord + 1);
            aux = [];
            aux = aux.concat(wordCurrent);

            for (let i = 0; i < 5 - numberWord; i++) {
                aux.push({ letter: '', type: 1, color: 2 });
            }

            setWord(aux);
        }

    }

    const deleteLetter = () => {
        if (numberWord > 1) {
            wordCurrent.pop();

            let value = numberWord;
            value--;
            setNumberWordCurrent(value);
            aux = [];
            aux = aux.concat(wordCurrent);
            console.log('Borrado', value);

            for (let i = 0; i <= 5 - value; i++) {
                aux.push({ letter: '', type: 1, color: 2 });
            }

            setWord(aux);
        }
    }

    const firtsLevel: IKey[] = [
        { letter: 'Q', type: 1, addLetter: addLetter },
        { letter: 'W', type: 1, addLetter: addLetter },
        { letter: 'E', type: 1, addLetter: addLetter },
        { letter: 'R', type: 1, addLetter: addLetter },
        { letter: 'T', type: 1, addLetter: addLetter },
        { letter: 'Y', type: 1, addLetter: addLetter },
        { letter: 'U', type: 1, addLetter: addLetter },
        { letter: 'I', type: 1, addLetter: addLetter },
        { letter: 'O', type: 1, addLetter: addLetter },
        { letter: 'P', type: 1, addLetter: addLetter },
    ];
    const secondLevel: IKey[] = [
        { letter: 'A', type: 1, addLetter: addLetter },
        { letter: 'S', type: 1, addLetter: addLetter },
        { letter: 'D', type: 1, addLetter: addLetter },
        { letter: 'F', type: 1, addLetter: addLetter },
        { letter: 'G', type: 1, addLetter: addLetter },
        { letter: 'H', type: 1, addLetter: addLetter },
        { letter: 'J', type: 1, addLetter: addLetter },
        { letter: 'K', type: 1, addLetter: addLetter },
        { letter: 'L', type: 1, addLetter: addLetter },
        { letter: 'Ñ', type: 1, addLetter: addLetter },
    ];
    const thirdLevel: IKey[] = [
        { letter: 'Z', type: 1, addLetter: addLetter },
        { letter: 'X', type: 1, addLetter: addLetter },
        { letter: 'C', type: 1, addLetter: addLetter },
        { letter: 'V', type: 1, addLetter: addLetter },
        { letter: 'B', type: 1, addLetter: addLetter },
        { letter: 'N', type: 1, addLetter: addLetter },
        { letter: 'M', type: 1, addLetter: addLetter },
    ];

    return (<>
        <div className="mt-16 ml-auto mr-auto w-[638px] h-[14.875rem] rounded-[0.9375rem] bg-[#dadce0]/[.30] dark:bg-[#dadce0]/[.3]">
            <div className="pt-8 pb-8 flex flex-col flex-wrap justify-around h-full">
                <div className="pr-12 pl-12 w-full flex flex-row justify-around">
                    {firtsLevel.map((key) => (
                        <><Key {...key}></Key></>
                    ))}
                </div>
                <div className="pl-16 pr-9 w-full flex flex-row justify-around">
                    {secondLevel.map((key) => (
                        <><Key {...key}></Key></>
                    ))}
                </div>
                <div className="pl-5 pr-20 w-full flex flex-row justify-around">
                    <KeyEnter></KeyEnter>
                    {thirdLevel.map((key) => (
                        <><Key {...key}></Key></>
                    ))}
                    <KeyDelete deleteWord={deleteLetter}></KeyDelete>
                </div>
            </div>
        </div>
    </>)
}

export default KeyBoard;