import React from 'react';
import { Provider } from 'react-redux';
import List from './components/List';
import configureStore from './redux/store';

export default function App() {
  return (
    <Provider store={configureStore()}>
      <List />
    </Provider>
  );
}
