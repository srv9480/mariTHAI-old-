import { Carousel } from 'antd';
import React from 'react';

const contentStyle = {
  height: '460px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  marginBottom: '40px',
};
function CarouselImg() {
  return (
    <Carousel effect="fade" style={{ fontSize: '46px' }}>
      <div>
        <h3 style={contentStyle}>Отзыв 1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Отзыв 2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Отзыв 3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Отзыв 4</h3>
      </div>
    </Carousel>
  );
}
export default CarouselImg;
