import React, { useContext, useState } from 'react';
import Banner from '../Banner/Banner';
import './styles.css';
import Card from '../../Reuseable/Card/Card';
import Iconbox from '../../Reuseable/Icon/Iconbox';
import emailjs from 'emailjs-com';
import { addNotification } from './Appfunctions.js';
import { ContextApp } from '../../../ContextAPI';

function Contact() {
  const { notifisystem } = useContext(ContextApp);
  const [formvalues, setFormvalues] = useState({
    name: '',
    email: '',
  });
  function sendEmail(e) {
    console.log('asd');
    e.preventDefault();
    emailjs.sendForm('service_jsaoihr', 'template_h5vq1co', e.target, 'user_B0W0FA6EBGqj9vC542Rs3')
      .then((result) => {
        console.log(result.text);
        const parameters = {
          msg: 'Email Sent!',
          icon: 'fad fa-envelope',
          notifisystem,
        };
        addNotification(parameters);
      }, (error) => {
        console.log(error.text);
      });
  }
  // const forminputs = contactinputs?map(input=>{
  //   return <Objectinput
  //   text={input.text}
  //   value={formvalues}
  //   setValue={setFormvalues}
  //   obj={input.value}
  //   textarea={input.textarea}
  //   name={input.name}
  //   />
  // })
  // const contactboxesrow = contactboxes?.map(box=>{
  //   return (
  //      <Card copy={true} card={box} iconlink={
  //       <a href={box.link} target={!box.notblank&&'__blank'}>
  //         <i className='fal fa-chevron-right'></i>
  //       </a>
  //      }/>
  //   )
  // })

  return (
    <div className="contact">

      <div className="contactinfo">
        <div className="contactitle">
          <h2>Contact Me</h2>
          <small className="graytext">
            Don't hesitate to reach out to me!
          </small>
        </div>
        <div className="contactboxes" />
      </div>
      <div className="contactform">
        <div className="leftcontact">
          <Iconbox icon="fad fa-envelope" />
          <h2>Send Me a Message</h2>
        </div>
        <form onSubmit={(e) => sendEmail(e)}>

          {/* <AppButton text={'Submit'} icon='fad fa-envelope'/> */}
        </form>
      </div>
    </div>
  );
}
export default Contact;
