import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import { page4 } from './data';
import YMap from '../components/YandexMap/YandexMap';


import Toggle from '../components/Button/ButtinMap';

// function getLi(num, d, i) {
//   const t = num + 1;
//   if (i > t * 4 - 1 || i < num * 4) {
//     return null;
//   }
//   return (
//     <Col className="col" span={4} key={i} offset={!(i % 4) ? 1 : 2}>
//       <i style={{ backgroundImage: `url(${d})` }} />
//     </Col>
//   );
// }
export default function Page4() {
 
  return (
    <div className="home-layout-wrapper-map home-user-wrapper">
      <div className="home-layout-map" playScale={0.4}>
        <div className="home-user" type="bottom" key="home-func" ease="easeOutQuart" leaveReverse id='section3'>
          <h2 key="h2" style={{ color: 'black', marginTop: '6rem' }}>КАК ДОБРАТЬСЯ</h2>
          <i key="i" className="line" />
          <div className='container-contacts' style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className='container-contacts-left' style={{width: "50%"}}>
              <YMap />
            </div>
            <div className='container-contacts-right' style={{width: "45%"}}>
              <div className='contacts-right-main' style={{fontSize:'16px'}}>
              г. Москва, Ильменский проезд, 17к3 <br />
                График работы: с 9 до 19 ч <br />
                
               E-mail: <a href='' style={{color: 'blue'}}> support@marithai.ru </a><br />
                Телефон: <a href='tel:+74997536333' style={{color: 'blue'}}>+7 499 753-63-33</a> <br /> <br />
                Как нас найти: <br />
                Маршрут от м. Селигерская<br />
                Двигайтесь по улице Б. Семеновская от м. Электрозаводская, мимо Макдональдса, до здания с аркой. Ориентируйтесь по вывеске «Мой ортодонт» слева от арки. Поверните под арку. Вы окажетесь на парковке. Слева будет главный вход в офис.
                <br /> <br />
               <Toggle 
                 
            
                 />
                 
              </div>
            </div>
          </div>
          {/* <div className="map" style={{width: '100%', height: '500px', backgroundColor: 'gray'}} /> */}
        </div>
      </div>
    </div>
  );
}
