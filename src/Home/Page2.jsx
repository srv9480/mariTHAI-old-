import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QRCode from 'qrcode.react';
import { Row, Col } from 'antd';
import { page2 } from './data';
import SliderMain from '../components/Slider';
import CarouselImg from './Carousel';

export default function Page2() {
  const children = page2.map((d, i) => {
    if (i > 2) {
      return null;
    }
    return (
      <Col key={i} className="col" span={8}>
        <div className="content-wrapper home-hover">
          <div className="image" style={{ backgroundImage: `url(${d.image})` }} />
          <div className="code-wrapper">
            <h4>扫码预览</h4>
            <QRCode value={d.url} size={160} />
          </div>
        </div>
      </Col>);
  });
  return (
    <div className="home-layout-wrapper home-case-wrapper" style={{height: "100%", paddingBottom: "5rem"}}>
      <OverPack className="home-layout" playScale={0.4}>
        <QueueAnim className="home-case" type="bottom" key="home-case" ease="easeOutQuart" leaveReverse>
          <h2 key="h2" style={{color: 'white'}}>НЕМНОГО О НАС :)</h2>
          <i key="i" className="line" />
          <QueueAnim
            key="content"
            component={Row}
            type="bottom"
            componentProps={{ gutter: 171 }}
          >
            {children}
          </QueueAnim>
          <h2 key="h2" style={{color: 'white', marginTop: '150px'}}>ОТЗЫВЫ</h2>
          <i key="i" className="line" />
          <QueueAnim
            key="content"
            component={Row}
            type="bottom"
            componentProps={{ gutter: 171 }}
            style={{ width: '45%', margin: '0 auto'}}
          >
            {/* <CarouselImg /> */}
            <SliderMain />
          </QueueAnim>
        </QueueAnim>
      </OverPack>
    </div>);
}
