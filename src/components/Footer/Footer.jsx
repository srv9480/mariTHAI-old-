import React from 'react';
import './styles.less';
import instagram from '../../assets/icons/instagram.png';

class FooterNew extends React.PureComponent {

  render() {
    return (
      <div className='footer-main'>
        <div className='footer-container'>
          <div className='footer-content'>
            <div className='footer-content-social'>
              <a href='./'>
                <img src={instagram} width={30} height={30} />
              </a>
              <a href='./'>
                <img src={instagram} width={30} height={30} />
              </a>
              <a href='./'>
                <img src={instagram} width={30} height={30} />
              </a>
            </div>
            <div className='footer-content-text'>
            Copyright ©2022 MariThai  |  Салон Тайского массажа
            </div>
          </div>
        </div>
      </div>
      );
    }
  }
  
  export default FooterNew;