import React from 'react';

import styles from './App.module.scss';
import UserBox from './components/UserBox/UserBox';
import ChatBox from './components/ChatBox/ChatBox';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  return (
    <>
      <div className={styles.chat}>
        <UserBox/>
        <ChatBox/>
        <Sidebar/>
      </div>
    </>
  );
}

export default App;
