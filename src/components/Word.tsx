import {FC} from 'react';
import Letter from './Letter';
import { IWord } from '../interfaces/IWord';

const Word: FC<IWord> = ({letters} : IWord) => {
    return (<>
       <div className="flex flex-row justify-around">
            {letters.map( (letter) =>(
                <><Letter {...letter}></Letter></>
            ))}
        </div>
    </>)
}

export default Word;