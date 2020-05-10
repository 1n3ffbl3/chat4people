import React, { useState, useEffect } from 'react';

import styles from './ChatBox.module.scss';
import MessageBox from '../MessageBox/MessageBox.js';


const ChatBox = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:1337/users/1/conversations/1/messages');
      const data = await response.json();
      const msgs = data.map(msg => ({ id: msg.senderId, message: msg.content }));
      setMessages(msgs);
    }
    fetchData();
  }, []);

  const msgStyle = id => 1 === id ? styles.messagesUser1 : styles.messagesUser2;
  const addMsg = txt => setMessages([...messages, { id: 2, message: txt }]);

  return (
    <>
      <div className={styles.chatContainer}>
        <div className={styles.chatBox}>
          <div className={styles.messages}>
            {messages.map(msg => (
              <div className={msgStyle(msg.id)}>
                {msg.message}
              </div>
            ))}
          </div>
        </div>
        { /* TODO: Add better prop name to increase readibility */}
        <MessageBox sendMessage={addMsg} />
      </div>
    </>
  );
};

// TODO: add propTypes

export default ChatBox;