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

  const msgStyle = id => 2 === id ? styles.messagesUser1 : styles.messagesUser2;
  const addMsg = (msg) => setMessages([...messages, {message: msg, id: 1}]);

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
        <MessageBox senderId="1" onMsgSent={addMsg} />
      </div>
    </>
  );
};

// TODO: add propTypes

export default ChatBox;