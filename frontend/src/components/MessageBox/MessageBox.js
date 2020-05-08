import React from 'react';

import styles from './MessageBox.module.scss';


const MessageBox = ({ sendMessage }) => (
  <div className={styles.messageBox}>
    { /* TODO: Read value from contentEditable div and pass to sendMessage */ }
    <div className={styles.msgType} contentEditable="true"></div>
    <button className={styles.btnSendMsg} onClick={() => sendMessage('TEST')}>>></button>
  </div> 
);

// TODO: add propTypes

export default MessageBox;