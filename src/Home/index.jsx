import React from 'react';
import DocumentTitle from 'react-document-title';


import 'react-slideshow-image/dist/styles.css';


// import Header from './Header';
import Banner from './Banner';
import Price from './Price';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Footer from './Footer';
import './static/style';
import '../index.less';


class Home extends React.PureComponent {
  render() {
    return (
      <div className='parallax'>
        <div className='parallax-container'> 
          <div className="home-page">
            <Banner key="banner" />
            <Price />
             {/* <Page1 key="page1" /> 
             <Page2 key="page2" /> */}
             <Page3 key="page3" />
             <Page4 key="page4" /> 
            {/* <Footer key="footer" /> */}
            <DocumentTitle title="Тайский массаж MariThai Москва" />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
