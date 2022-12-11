import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './styles.css';
import { useAlert } from 'react-alert'
import InputMask from 'react-input-mask';
function MyForm({ inputHandler, formSubmit }) {
const form = useRef();
const alert = useAlert()
const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_mgitona', 'template_vmczf8v',  form.current, 'C5iVVYYlk6lOdCBim')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};
  return (
    <div className="col-lg-12 form-content" style={{ marginTop: '1.6rem' }}>
     <form ref={form} onSubmit={sendEmail}>
        <div className="col-lg-4" style={{ marginBottom: '10px' }}>
        <input
          type="text"
          name="nameField"
          placeholder="Ваше Имя"
          onChange={inputHandler}
        />
      </div>
      <div className="col-lg-4" style={{ marginBottom: '10px' }}>
        <InputMask mask="+7 (999) 999-99-99"
        name="phone"
        placeholder="+7"
        />
      </div>
      <div className="col-lg-4" style={{ marginBottom: '10px' }}>
        <button type="submit" style={{ width: '380px' }} 
        // onClick={formSubmit}
        onClick={() => {
          alert.show(<div style={{ color: 'blue' }}>Some Message</div>)
      }}>
          Получить
        </button>
      </div>
      </form>
      <div className="success">Спасибо, мы скоро с Вами свяжемся!</div>
      <div className="footer">
        <div className="footer-text_item">
          Отправка данной формы означает согласие с Пользовательским соглашением
          и Политикой конфиденциальности
        </div>
      </div>
    </div>
  );
}

export default MyForm;
