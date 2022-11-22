// import "./helper.css";
// import { MoreResources, DisplayFormikState } from "./helper";

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './styles.less';

function FromM() {
  return (
    <div className="app">
      <Formik
        initialValues={{ phone: '', name: '' }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={Yup.object().shape({
          phone: Yup.string()
            .min(2, "C'mon, your name is longer than that")
            .required('1'),
          name: Yup.string()
            .min(2, "C'mon, your name is longer than that")
            .required('2'),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          function sendEmail(e) {
            e.preventDefault();

            emailjs
              .sendForm(
                'service_mgitona',
                'template_vmczf8v',
                e.target,
                'C5iVVYYlk6lOdCBim',
              )
              .then(
                (result) => {
                  console.log(result.text);
                },
                (error) => {
                  console.log(error.text);
                },
              );
          }

          return (

            <form id="myform" onSubmit={sendEmail}>
              <label htmlFor="name" style={{ display: 'block' }} />
              <input
                name="name"
                id="name"
                placeholder="Имя"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                errors.name && touched.name
                  ? 'text-input error'
                  : 'text-input'
              }
              />
              {errors.name && touched.name && (
              <div className="input-feedback" style={{ color: 'red' }}>{errors.name}</div>
              )}

              <label htmlFor="phone" style={{ display: 'block' }} />
              <input
                name="phone"
                id="phone"
                placeholder="+7 "
                type="text"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                errors.phone && touched.phone
                  ? 'text-input error'
                  : 'text-input'
              }
              />
              {errors.phone && touched.phone && (
              <div className="input-feedback" style={{ color: 'red' }}>Не верно указан номер телефона</div>
              )}
              <button
                className="btnForm "
                type="submit"
                disabled={isSubmitting}
                value="Send"
                style={{ display: 'block', marginTop: '1rem', width: '100%' }}
              >
              Отправить
              </button>

            </form>

          );
        }}
      </Formik>

    </div>
  );
}

export default FromM;
