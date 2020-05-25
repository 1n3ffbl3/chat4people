import React from 'react';

import styles from './ChatBox.module.scss';
import Chat from './Chat/Chat';
import MessageInput from './MessageInput/MessageInput';


const ChatBox = () => (
  <div className={styles.chatContainer}>
    <Chat/>
    { /* TODO: Add better prop name to increase readibility */}
    <MessageInput/>
  </div>
);

export default ChatBox;