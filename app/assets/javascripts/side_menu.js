import React from 'react';
import ReactDOM from 'react-dom';
import SideMenu from './side_menu/';

const renderComponent = (domNode) => {
  ReactDOM.render(<SideMenu />, domNode);
};

const start = () => {
  const domNode = document.getElementById('side_menu_app');
  if (domNode) {
    renderComponent(domNode);
  }
};

export default start;
