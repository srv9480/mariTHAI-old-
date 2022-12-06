import React from 'react';
import YMap from '../components/YandexMap/YandexMap';
import Button from '../components/Button/textb';
import { ButtonThemes, ButtonTypes, ButtonSizes } from '../components/Buttons/buttonTypes';
import { IconTypes } from '../components/Button/iconTypes';

export default function Page4() {
  return (
    <div className="home-layout-wrapper-map home-user-wrapper">
      <div className="home-layout-map" playScale={0.4}>
        <div className="home-user" type="bottom" key="home-func" ease="easeOutQuart" leaveReverse>
          <h2 key="h2" style={{ color: 'black', marginTop: '6rem' }}>КАК ДОБРАТЬСЯ</h2>
          <i key="i" className="line" />
          <div className="container-contacts" id="section3">
            <div className="container-contacts-left">
              <YMap />
            </div>
            <div className="container-contacts-right">
              <div className="contacts-right-main" style={{ fontSize: '18px' }}>
                <div className="right-main-text">
                  г. Москва, Ильменский проезд, 17к4
                  {' '}
                  <br />
                  График работы: с 11:00 до 23:00
                  {' '}
                  <br />
                  E-mail: support@marithai.ru
                  <br />
                  Телефон: +7(916)104-37-36 <br /> <br />

                  Как нас найти: <br />
                  Вход на территорию ЖК осуществляется через калитку, расположенную между корпусом 1 и 3, далее по дорожке направо пройти до корпуса 4, вход в салон со стороны торца здания. Для прохода через калитку необходимо позвонить по телефону
                  <br />
                  {' '}
                  <br />
                </div>
                <div className="btc-container">
                  <Button
                    color="button-warning"
                    text="Построить маршрут"
                    onClickHandler={() => window.location.href = 'https://yandex.ru/maps/?ll=39.137872%2C56.640507&mode=routes&rtext=~55.861287%2C37.541243&rtt=pd&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozODY5NjExMzQwEkTQoNC%2B0YHRgdC40Y8sINCc0L7RgdC60LLQsCwg0JjQu9GM0LzQtdC90YHQutC40Lkg0L%2FRgNC%2B0LXQt9C0LCAxN9C6MyIKDTsqFkIV9nFfQg%3D%3D&z=7'}
                    type="button"
                    size="btn-normal"
                    theme="tm-6"
                    style={{ maxWidth: '400px', width: '100%', display: 'block' }}
                  />
                  <Button
                    color="button-default"
                    text="+7(916)104-37-36"
                    onClickHandler={() => window.location.href = 'tel:79161043736'}
                    type="button"
                    size="btn-normal"
                    // icon={IconTypes.SAVE}
                    theme="tm-6"
                    style={{ maxWidth: '400px', width: '100%', marginTop: '1rem' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
