import React from 'react';
import ReactDOM from 'react-dom';

import Content from './pages/Content';
import LightNavbar from './components/LightNavbar';
import Footer from './components/Footer';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <LightNavbar />
  </React.StrictMode>,
  document.getElementById('navbar')
);

ReactDOM.render(
  <React.StrictMode>
    <Content />
  </React.StrictMode>,
  document.getElementById('content')
);

ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById('footer')
);