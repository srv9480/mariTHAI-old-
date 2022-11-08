import React from 'react';
import ReactDOM from 'react-dom';
import Home from './src/Home';
import FooterNew from './src/components/Footer/Footer.jsx';
import Navbar from './src/components/Navbar/Navbar';

function App() {
  return (
    <div>
    <Navbar />
    <Home />
    <FooterNew />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
