
import React, { useState, useCallback } from "react";
import Modal from "@netojose/react-modal";
import "./Modal.css";
// import FromM from '../FormA/FormA.jsx';
import ButtonMain from '../Button/Button.jsx';

const ModalWindow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);
  return (
    <div>
      <button type="button" value="Open modal" onClick={openModal}>
        Получить
      </button>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <img src={'https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/close-icon.png'} width='18px' height="18px" onClick={closeModal} 
        style={{position:'absolute', top:'16px', right:'16px', cursor: 'pointer'}}
        />
        <p>This is the modal content</p>
         {/* <FromM />  */}
      </Modal>
    </div>
  );
  }
export default ModalWindow;


       
  