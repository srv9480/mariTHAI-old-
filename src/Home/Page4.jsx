import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import YMap from '../components/YandexMap/YandexMap';
import Toggle from '../components/Button/ButtinMap';

export default function Page4() {

  return (
    <div className="home-layout-wrapper-map home-user-wrapper">
      <div className="home-layout-map" playScale={0.4}>
        <QueueAnim className="home-user" type="bottom" key="home-func" ease="easeOutQuart" id='section3' leaveReverse >
          <h2 key="h2" style={{ color: 'black', marginTop: '6rem' }}>КАК ДОБРАТЬСЯ</h2>
          <i key="i" className="line" />
          <div className='container-contacts'>
            <div className='container-contacts-left'>
              <YMap />
            </div>
            <div className='container-contacts-right'>
              <div className='contacts-right-main' style={{ fontSize: '16px' }}>
                г. Москва, Ильменский проезд, 17к3 <br />
                График работы: с 9 до 19 ч <br />
                E-mail: <a href='' style={{ color: 'blue' }}> support@marithai.ru </a><br />
                Телефон: <a href='tel:+74997536333' style={{ color: 'blue' }}>+7 499 753-63-33</a> <br /> <br />
                Как нас найти: <br />
                Маршрут от м. Селигерская<br />
                Двигайтесь по улице Б. Семеновская от м. Электрозаводская, мимо Макдональдса, до здания с аркой. Ориентируйтесь по вывеске «Мой ортодонт» слева от арки. Поверните под арку. Вы окажетесь на парковке. Слева будет главный вход в офис.
                <br /> <br />
                <Toggle />
              </div>
            </div>
          </div>
        </QueueAnim>
      </div>
    </div>
  );
}
