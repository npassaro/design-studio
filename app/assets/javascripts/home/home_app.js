import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './stores/home_app_store';
import Home from './components/home_container';

export default class HomeApp {
  constructor() {
    // This configuration must be specific for selectize autocomplete index
    this.domNode = document.getElementById('home_react_app');
  }

  render() {
    const ui = <Provider store={store}><Home /></Provider>;
    ReactDOM.render(ui, this.domNode);
  }

  start() {
    if (this.domNode) {
      this.render();
    }
  }
}
