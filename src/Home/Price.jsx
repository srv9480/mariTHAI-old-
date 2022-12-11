import React from 'react';
import QueueAnim from 'rc-queue-anim';
import './static/custom.less';
import { Tabs } from 'antd';
import PriceDropDownOne from '../components/PriceDropDown/PriceDropDownOne';
import PriceDropDownTwo from '../components/PriceDropDown/PriceDropDownTwo';

// <---- Tabs Component ----> //

export default function Price() {
  return (
    <div className="home-layout-wrapper home-func-wrapper" id="home-func">
      <h2>УСЛУГИ</h2>
      <i className="line" />
      <div className="home-layout" location="home-func" playScale={0.4} style={{ padding: '0' }}>
        <QueueAnim className="home-func" type="bottom" key="home-func" ease="easeOutQuart" leaveReverse>
          <div className="about-info" id="about-info">
            <div className="about-info-text">
              <div className="info-text-border">
                <h2 style={{ fontSize: 36, paddingTop: '1rem' }}>Тайский массаж MARI THAI в Москве</h2>
                <div className="text-border-title" style={{ padding: '1.5rem' }}>
                  Мы ценин уют, комфорт и качество, именно поэтому в нашем салоне вы испыатете ту самую магию релакса, забудете о всех проблемах и полноценно отдохнете. Наши мастера настоящие профессионалы из Тайланда.
                  Попробуйте наши незабываемые программы из раздела МАССАЖ или SPA
                                        </div>
                <br />
                <Tabs defaultActiveKey="1">
                  <Tabs.TabPane tab="МАССАЖ" key="1">
                        <PriceDropDownOne />
                      </Tabs.TabPane>
                  <Tabs.TabPane tab="SPA" key="2">
                        <PriceDropDownTwo />
                      </Tabs.TabPane>
                </Tabs>
              </div>

              <div className="info-text-service">
                <div className="info-text-service-discount">
                  <span style={{ color: 'red', fontSize: '24px' }}>Скидка 20%</span>
                  <div className="service-discount-text">Запишись сейчас и получи скидку в нашем салоне на любую услугу</div>
                </div>
                <div className="info-text-service-discount">
                  <span style={{ color: 'red', fontSize: '24px' }}>Подарочный сертификат</span>
                  <div className="service-discount-text">Подари незабываемое наслаждение своему дорогому человеку</div>
                </div>
              </div>
            </div>
          </div>
        </QueueAnim>
      </div>
    </div>
  );
}
