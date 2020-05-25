import React from 'react';
import { Provider } from "react-redux";

import store from './store/index';
import styles from './App.module.scss';
import UserBox from './components/UserBox/UserBox';
import ChatBox from './components/ChatBox/ChatBox';


function App() {
  return (
    <Provider store={store}>
      <div className={styles.chat}>
        <UserBox/>
        <ChatBox/>
      </div>
    </Provider>
  );
}

export default App;
