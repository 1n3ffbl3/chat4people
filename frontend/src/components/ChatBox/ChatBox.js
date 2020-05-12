import React from 'react';

import styles from './ChatBox.module.scss';
import ConnectedChat from './Chat/Chat';
import MessageInput from './MessageInput/MessageInput';


const ChatBox = () => (
  <div className={styles.chatContainer}>
    <ConnectedChat/>
    { /* TODO: Add better prop name to increase readibility */}
    <MessageInput/>
  </div>
);

export default ChatBox;