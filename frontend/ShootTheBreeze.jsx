import React from 'react';
import ReactDOM from 'react-dom';
import { ActionCableProvider } from 'react-actioncable-provider';
import configureStore from './store/store';
import App from './components/App';

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();
  let root = document.getElementById("root");
  ReactDOM.render(<App store={store} />, root)
})