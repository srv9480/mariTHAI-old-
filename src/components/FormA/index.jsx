import React, { useState } from 'react';
import './styles.css';
import MyForm from './FormAA.jsx';

const initialState = {
  nameField: '',
  mobileField: '',
  addressField: '',
};

export default function newForm() {
  const [formData, updateFormData] = useState(initialState);

  const inputHandler = (e) => {
    e.preventDefault();
    updateFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const formSubmit = () => {
    console.log(formData);
  };

  return (
    <div>
      <div className="form-container">
        <div className="form-wrapper">
          <h1 className="m-top-2">Оставь заявку на получение скидки</h1>
          <h2>И мы обязательно с Вами свяжемся!</h2>
          <MyForm
            inputHandler={(e) => inputHandler(e)}
            formSubmit={formSubmit}
          />
        </div>
      </div>
    </div>
  );
}
