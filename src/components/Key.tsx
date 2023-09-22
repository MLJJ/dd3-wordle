import { IKey } from "../interfaces/IKey";

const Key = ({letter, type, addLetter}:IKey) => {
    
    return (<>
        <div key={letter} onClick={() => addLetter(letter)} className="cursor-pointer flex justify-center items-center w-11 h-[3.1875rem] rounded-[0.3125rem] bg-[#d3d6da] dark:bg-[#565f7e]">
            <div className="flex flex-col justify-center w-[0.8125rem] h-[1.6875rem] text-white text-center font-['Roboto'] text-lg font-semibold leading-[normal]">
                {letter}
            </div>
        </div>
    </>)
}

export default Key;