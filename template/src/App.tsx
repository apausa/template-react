import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Route, Redirect, Switch
} from 'react-router-dom';
import store from './redux/store';
import './styles/App.css';

function App() {
  return (
    <Provider store={store()}>
    
    <Provider />
  );
}

export default App;
