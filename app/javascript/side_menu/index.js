import React from 'react';
import ReactDOM from 'react-dom';

import SideMenu from './container';

const renderComponent = (domNode) => {
  ReactDOM.render(<SideMenu />, domNode);
};

const start = () => {
  const domNode = document.getElementById('side_menu_app');
  if (domNode) {
    renderComponent(domNode);
  }
};


document.addEventListener('DOMContentLoaded', () => {
  start();
});
