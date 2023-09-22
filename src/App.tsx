import './App.css';
import { useModal } from './hooks/useModal';
import { useState, useEffect } from 'react';
import Modal from './components/Modal';
import Instructions from './components/Instructions';
import Board from './components/Board';
import Header from './components/Header';
import KeyBoard from './components/Keyboard';
import { ILetter } from './interfaces/ILetter';

function App() {
  const [isOpen, openModal, closeModal] = useModal();
  const [word, setWord] = useState<ILetter[]>([]);
  const [numberWord, setNumberWord] = useState<number>(1);

  useEffect(() => {
    
  }, [word]);

  return (
    <>
    <div>
      <Header isDark={false} openModalIntructions={openModal}></Header>
      <Board word={word} numberWord={numberWord}></Board>
      <KeyBoard setWord={setWord} setNumberWord={setNumberWord}></KeyBoard>
      <Modal isOpen={isOpen} ><Instructions closeModal={closeModal}/></Modal> 
    </div>
    </>
  );
}

export default App;
