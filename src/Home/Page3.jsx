import React from 'react';
import Masters from '../components/Masters/Masters';

export default function Page3() {
  return (
    <div
      className="home-layout-wrapper home-serve-wrapper"
      style={{ height: '100%', width: '100%' }}
    >
      <div
        className="home-layout"
        playScale={0.4}
        style={{ width: '100%' }}
      >
        <div className="home-serve" type="bottom" key="home-func" ease="easeOutQuart" leaveReverse id="section2">
          <h2 key="h2" style={{ color: 'white', marginTop: '150px' }}>НАШИ МАСТЕРА</h2>
          <i key="i" className="line" />
          <Masters />
        </div>
      </div>
    </div>
  );
}
