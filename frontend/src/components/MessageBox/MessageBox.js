import React from 'react';

import styles from './MessageBox.module.scss';


const MessageBox = () => (
  <div className={styles.messageBox}>
    <div className={styles.msgType} contentEditable="true"></div>
  </div> 
);

export default MessageBox;