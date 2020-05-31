import React from 'react';
import { Provider } from "react-redux";

import store from './store/index';
// import styles from './App.module.scss';
import AppContainer from './components/AppContainer/AppContainer';


function App() {
  return (
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  );
}

export default App;
