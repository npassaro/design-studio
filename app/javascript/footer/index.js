import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './footer';

const renderComponent = (domNode) => {
  ReactDOM.render(<Footer />, domNode);
};

const start = () => {
  const domNode = document.getElementById('footer_app');
  if (domNode) {
    renderComponent(domNode);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  start();
});
