import React from 'react';
import Slider from './Slider.jsx';
import './styles.less';

export default function SliderMain() {
  const slides = [
    'https://i.gyazo.com/4ddb9e3dee903963a4370a57bac5d95c.png',
    'https://i.gyazo.com/4ddb9e3dee903963a4370a57bac5d95c.png',
    'https://i.gyazo.com/4ddb9e3dee903963a4370a57bac5d95c.png',
    'https://i.gyazo.com/4ddb9e3dee903963a4370a57bac5d95c.png',
    'https://i.gyazo.com/4ddb9e3dee903963a4370a57bac5d95c.png',
  ];
  return <Slider slides={slides} />;
}
