import React from 'react';
import ReactDOM from 'react-dom';
import PiecesList from './components';

export default class ProjectsApp {
  constructor() {
    // This configuration must be specific for selectize autocomplete index
    this.domNode = document.getElementById('pieces_app');
  }

  render() {
    const pieces = this.pieces(this.domNode);
    ReactDOM.render(<PiecesList pieces={pieces} />, this.domNode);
  }

  pieces() {
    return JSON.parse(this.domNode.dataset.pieces);
  }

  start() {
    if (this.domNode) {
      this.render();
    }
  }
}
