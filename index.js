import React from 'react';
import ReactDOM from 'react-dom';
import Home from './src/Home';
import FooterNew from './src/components/Footer/Footer.jsx';
import Navbar from './src/components/Navbar/Navbar';
import './styles.css';
import Banner from './src/Home/Banner';

function App() {
  return (
    <div>
      <Navbar />
      <Home /> 
      {/* <div className="home-page">
        <Banner />
      </div> */}
      <FooterNew />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
