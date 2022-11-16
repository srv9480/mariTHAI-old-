import React from 'react';
import DocumentTitle from 'react-document-title';
import 'react-slideshow-image/dist/styles.css';
import Banner from './Banner';
import Price from './Price';
import Page3 from './Page3';
import Page4 from './Page4';
import './static/style';
import '.././index.less';


class Home extends React.PureComponent {
  render() {
    return (
      <div className='parallax'>
        <div className='parallax-container'>
          <div className="home-page">
            <Banner key="banner" />
            <Price />
            <Page3 key="page3" />
            <Page4 key="page4" />
            <DocumentTitle title="Тайский массаж MariThai Москва" />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
