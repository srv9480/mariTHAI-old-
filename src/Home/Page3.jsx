import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import { page3 } from './data';
import Masters from '../components/Masters/Masters';


export default function Page3() {
  return (
    <div className="home-layout-wrapper home-serve-wrapper"
    style={{height: '100%', width: '100%'}}
    >
      <OverPack className="home-layout" playScale={0.4}
      style={{width: '100%'}}
      >
        <QueueAnim className="home-serve" type="bottom" key="home-func" ease="easeOutQuart" leaveReverse id='section2'>
            <h2 key="h2" style={{ color: 'white', marginTop: '150px' }}>НАШИ МАСТЕРА</h2>
          <i key="i" className="line"/>
        
          <Masters 
       
          />
        
        </QueueAnim>
      </OverPack>
    </div>);
}
