import React from 'react';

import styles from './ChatBox.module.scss';
import MessageBox from '../MessageBox/MessageBox.js';

const ChatBox = () => (
  <>
    <div className={styles.chatContainer}>
      <div className={styles.chatBox}>
        <div className={styles.messages}>
          <div className={styles.messagesUser1}>
            test1
          </div>
          <div className={styles.messagesUser2}>
            test2
          </div>
  
        </div>
      </div>
      <MessageBox />
    </div>
  </>
);

export default ChatBox;