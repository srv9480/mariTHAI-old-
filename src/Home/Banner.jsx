import React from "react";
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
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
            <h2 className='special' key="h2" style={{color: 'white', fontFamily: 'Lora'}}>Открой магию Тайланда в нашем салоне!</h2>
            <h3 key="h2" className='cta-info' style={{color: 'white', marginTop: '80px'}}>Запишись сейчас и получи скидку 15%</h3>
           <ModalWindow />   
          </QueueAnim>
        </div>
      </div>
    );
  }
}

export default Banner;
