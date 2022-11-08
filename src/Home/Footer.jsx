import React from 'react';
import { footer } from './data';

function antCloudFooter() {
  const children = footer.map((item, i) => (<div key={i}><a href={item.src}>{item.text}</a></div>));
  return (<div>
    <div className="logo" key="logo">
      <img src="https://i.ibb.co/JszZpVX/Group-250.png" width="160px" height="40px" />
    </div>
    <div key="nav" className="home-footer-nav-wrapper">
      {children}
    </div>
  </div>
  );
}

function Footer() {
  return (
    <div className="home-layout-wrapper home-footer-wrapper">
      <div className="footer-wrapper-img">
        <div className="home-layout">
          {/* {antCloudFooter()} */}
          <div className='img-block' style={{padding:'1rem'}}>
          <img src="https://i.ibb.co/N2jBHK3/inst-logo.png"
            style={{ width: '30px', height: '30px' }}
          />
          <img src="https://i.ibb.co/N2jBHK3/inst-logo.png"
            style={{ width: '30px', height: '30px' }}
          />
          <img src="https://i.ibb.co/N2jBHK3/inst-logo.png"
            style={{ width: '30px', height: '30px' }}
          />
          </div>
          <p key="cop" className="copy">Copyright ©2022 MariThai  |  Салон Тайского массажа</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
