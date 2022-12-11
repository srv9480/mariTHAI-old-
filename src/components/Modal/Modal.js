import React, { useState, useCallback } from 'react';
import Modal from '@netojose/react-modal';
import './Modal.css';
// import ButtonMain from '../Button/Button.jsx';
import MyForm from '../FormA/FormAA.jsx';
//import emailjs from '@emailjs/browser';

function ModalWindow() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);
  // const [formData, updateFormData] = useState(initialState);
  //  const form = useRef();
  // const initialState = {
  //   nameField: '',
  //   mobileField: '',
  //   addressField: '',
  // };
  // const formSubmit = () => {
  //   console.log(formData);
  // };
   const inputHandler = (e) => {
    e.preventDefault();
     updateFormData({ ...formData, [e.target.name]: e.target.value.trim() });
   };

  return (
    <div>
      <button className="btn-large" type="button" value="Open modal" disabled={true} onClick={openModal}>
        Получить
      </button>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/close-icon.png"
          width="18px"
          height="18px"
          onClick={closeModal}
          style={{
            position: 'absolute', top: '16px', right: '16px', cursor: 'pointer',
          }}
        />
        <div>
          <div className="form-container">
            <div className="form-wrapper">
              <h1>Оставь заявку на получение скидки</h1>
              <h2>И мы обязательно с Вами свяжемся!</h2>
              <MyForm
                 inputHandler={(e) => inputHandler(e)}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
  };          
export default ModalWindow;
