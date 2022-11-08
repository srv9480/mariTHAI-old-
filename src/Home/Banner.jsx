import React from "react";
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import BannerImage from './BannerImage';
import ModalWindow from '../components/Modal/Modal';

class Banner extends React.PureComponent {
   static propTypes = {
     className: PropTypes.string,
   }
   static defaultProps = {
     className: 'home-banner',
   }
  
   render() {
    const { className } = this.props;
    return (
      <div className={`home-layout-wrapper ${className}`}>
        <div className="home-layout">
          <QueueAnim className={`${className}-content-wrapper`} delay={300} ease="easeOutQuart">
            <h1 key="h2" style={{color: 'white'}}>
              Настоящий тайский массаж
            </h1>
            <p key="p" style={{color: 'white'}}>Открой магию Тайланда в нашем салоне!</p>
            <p key="p" className='cta-info' style={{color: 'white', marginTop: '90px'}}>Запишись сейчас и получи скидку 15%</p>
           <ModalWindow />   
          </QueueAnim>
          <div className={`${className}-image-wrapper`}>
            <BannerImage /> 
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
