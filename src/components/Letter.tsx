import {FC} from 'react';
import { ILetter } from "../interfaces/ILetter";

const Letter: FC<ILetter>= ({letter, type, color} : ILetter) => {
    const selectStyleBlock = (type: number) =>{
        let className : string = '';
        switch(type) {
            case 1: {
                className = 'border border-black bg-white dark:border dark:border-[#888fb5] dark:bg-[#262b3c]';
                break;
            }
            case 2: {
                className = 'bg-[#6aaa64]';
                break;
            }
            case 3: {
                className = 'bg-[#ceb02c]';
                break;
            }
            case 4: {
                className = 'bg-[#939b9f]';
            }
        }

        return className;
    };

    const selectStyleColor = (color: number) => {
        let className: string = '';
        switch(color) {
            case 1: {
                className = 'text-black dark:text-white';
                break;
            }
            case 2: {
                className = 'text-white';
                break;
            }
        }

        return className;
    }
    return (<>
    <div key={letter} className={`flex justify-center items-center w-[4.75rem] h-[4.75rem] rounded-[0.3125rem] ${letter === '' ? 'bg-[#939b9f]/[.30] dark:bg-[#939b9f]/[.20]': selectStyleBlock(type)}`}>
        <div className={`text-center font-['Roboto'] text-[2.1875rem] font-extrabold leading-[normal] ${selectStyleColor(color)}`}>{letter}</div>
    </div>
    </>)

}

export default Letter;