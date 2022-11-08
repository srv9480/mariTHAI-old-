import React, { useState } from "react";
import people from "./data";
import './styles.less';
import master1 from '../../assets/images/Master1.jpg'
import master2 from '../../assets/images/Master2.jpg'
import master3 from '../../assets/images/Master3.jpg'
import master4 from '../../assets/images/Master4.jpg'

const Masters = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];


  return (
    <div className="main-masters-container">
      <div className="main-masters">
        <div className="img-container">
          <img src={master1} alt={name} className="person-img" /></div>
        <div className="name-master">
          Мастер Румон</div>
        {/* <div className="job">{job}</div> */}
        <div className="info">Первоклассный специалист, владеет уникальными методами детального прорабатывания тела, очень востребована среди спортсменов.</div>
      </div>
      <div className="main-masters">
        <div className="img-container">
          <img src={master2} alt={name} className="person-img" /></div>
        <div className="name-master">Миссис Харакири</div>
        {/* <div className="job">{job}</div> */}
        <div className="info">{text}</div>
      </div>
      <div className="main-masters">
        <div className="img-container">
          <img src={master4} alt={name} className="person-img" /></div>
        <div className="name-master">Тётя Матильда</div>
        {/* <div className="job">{job}</div> */}
        <div className="info">{text}</div>
      </div>
      <div className="main-masters">
        <div className="img-container">
          <img src={master3} alt={name} className="person-img" /></div>
        <div className="name-master">Мастер Пусси</div>
        {/* <div className="job">{job}</div> */}
        <div className="info">{text}</div>
      </div>
      <div className="main-masters">
        <div className="img-container">
          <img src={master3} alt={name} classN  className="person-img" /></div>
        <div className="name-master">Мастер Пусси</div>
        {/* <div className="job">{job}</div> */}
        <div className="info">{text}</div>
      </div>
      <div className="main-masters">
        <div className="img-container">
          <img src={master3} alt={name} classN  className="person-img" /></div>
        <div className="name-master">Мастер Пусси</div>
        {/* <div className="job">{job}</div> */}
        <div className="info">{text}</div>
      </div>
    </div>
  );
};

export default Masters;
