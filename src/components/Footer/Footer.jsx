import React from 'react';
import './styles.less';
import instagram from '../../assets/icons/instagram.png';

class FooterNew extends React.PureComponent {
  render() {
    return (
      <footer className="footer-main">
        <div className="footer-container">
          <div className="footer-content">
            {/* <div className="footer-content-social">
              <a href="./">
                <img src={instagram} className="img-effect" width={30} height={30} />
              </a>
              <a href="./">
                <img src={instagram} className="img-effect" width={30} height={30} />
              </a>
              <a href="./">
                <img src={instagram} className="img-effect" width={30} height={30} />
              </a>
            </div> */}
            <div className="footer-content-text" style={{fontSize: '18px'}}>
              Copyright ©2022 MariThai  |  Салон Тайского массажа
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterNew;
