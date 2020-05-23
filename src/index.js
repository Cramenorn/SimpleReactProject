import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Content from './content/Content';
import LightNavbar from './lightnavbar/LightNavbar';

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
