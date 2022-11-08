// import "./helper.css";
// import { MoreResources, DisplayFormikState } from "./helper";


import React, { useRef }from 'react';
import emailjs from 'emailjs-com';
import { Formik } from "formik";
import * as Yup from "yup";
import './styles.less'



const FromM = () => (
 
  <div className="app">
    
    <Formik
    
      initialValues={{ phone: "", name: "" }}
      onSubmit={async values => {
        await new Promise(resolve => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={Yup.object().shape({
        phone: Yup.string()
          //.phone()
          .min(2, "C'mon, your name is longer than that")
          .required("Не верно введен email адрес"),
        name: Yup.string()
          .min(2, "C'mon, your name is longer than that")
          .required('Не верно введено Имя'),
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props; 
        function sendEmail(e) {
          e.preventDefault();
        
          emailjs
            .sendForm(
              "service_mgitona",
              "template_vmczf8v",
              e.target,
              "C5iVVYYlk6lOdCBim"
            )
            .then(
              (result) => {
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
            );
        }
        
        return (
          
          <form id="myform" onSubmit={sendEmail}>
            <label htmlFor="name" style={{ display: "block" }}>
            </label>
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
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.name && touched.name && (
              <div className="input-feedback" style={{color: 'red'}}>{errors.name}</div>
            )}
            {/* <label htmlFor="Email" style={{ display: "block" }}>
            </label>
            <input
              name="email"
              id="email"
              placeholder="Email "
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.email && touched.email && (
              <div className="input-feedback" style={{color: 'red'}}>Не верно указан email</div>
            )} */}

                       <label htmlFor="phone" style={{ display: "block" }}>
            </label>
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
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.phone && touched.phone && (
              <div className="input-feedback" style={{color: 'red'}}>Не верно указан номер телефона</div>
            )}
            <button className='btnForm 'type="submit" disabled={isSubmitting} value="Send"
            style={{display: 'block', marginTop: '1rem', width: '100%'}}
            >
              Отправить
            </button>

          </form>

        );
      }}
    </Formik>
  
  </div>
);

export default FromM;


// export const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_nofycoq', 'template_vmczf8v', form.current, 'kdldrU3P9sv43g9vB')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" id="firstName"/>
//       <label>Email</label>
//       <input type="email" name="user_email" id="email"/>
//       <label>Message</label>
//       <textarea name="message" />
     
//     </form>
//   );
// };