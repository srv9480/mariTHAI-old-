import React from 'react';
import ReactDOM from 'react-dom';
import Home from './src/Home';
import FooterNew from './src/components/Footer/Footer.jsx';
import Navbar from './src/components/Navbar/Navbar';
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <FooterNew />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
