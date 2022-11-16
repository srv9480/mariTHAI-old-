import React from "react";
import "./styles.css";
const MyForm = ({ inputHandler, formSubmit }) => {
  return (
    <div className="col-lg-12 form-content" style={{marginTop: '1.6rem'}}>
      <div className="col-lg-4" style={{ marginBottom: "10px" }}>
        <input
          type="text"
          name="nameField"
          placeholder="Ваше Имя"
          onChange={inputHandler}
        />
      </div>
      <div className="col-lg-4" style={{ marginBottom: "10px" }}>
        <input
          type="text"
          name="mobileField"
          placeholder="+7"
          onChange={inputHandler}
        />
      </div>
      <div className="col-lg-4" style={{ marginBottom: "10px" }}>
        <button type="submit" style={{width: '380px'}} onClick={formSubmit}>
          Получить
        </button>
      </div>
      <div className="footer">
        <div className="footer-text_item">
          Отправка данной формы означает согласие с Пользовательским соглашением
          и Политикой конфиденциальности
        </div>
      </div>
    </div>
  );
};

export default MyForm;
