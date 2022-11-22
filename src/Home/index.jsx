import React from 'react';
import DocumentTitle from 'react-document-title';
import 'react-slideshow-image/dist/styles.css';
import Banner from './Banner';
import Price from './Price';
import Page3 from './Page3';
import Page4 from './Page4';
import './static/style';
import '../index.css';

class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="fixed">
          <div className="bgcover" />
        </div>
        <div className="home-page">
          <Banner key="banner" />
          <Price />
          <Page3 key="page3" />
          <Page4 key="page4" />
          <DocumentTitle title="Тайский массаж MariThai Москва" />
        </div>
      </div>
    );
  }
}
export default Home;
