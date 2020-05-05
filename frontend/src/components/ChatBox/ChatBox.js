import React from 'react';
import styles from './ChatBox.module.scss';

const ChatBox = () => (
  <>
    <div className={styles.chatContainer}>
      <div className={styles.chatBox}>
        chatBox
      </div>
      <div className={styles.messageBox}>
        <input className={styles.msgInput} placeholder="Type your message..." />
      </div>
    </div>
  </>
);

export default ChatBox;