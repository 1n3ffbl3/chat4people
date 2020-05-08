import React, { useState } from 'react';

import styles from './ChatBox.module.scss';
import MessageBox from '../MessageBox/MessageBox.js';


const mockedMessages = [
  {
    id: 1,
    message: 'test 1 ',
  },
  {
    id: 2,
    message: 'test 2 ',
  },
  {
    id: 2,
    message: 'test 3 ',
  },
  {
    id: 1,
    message: 'test 4 ',
  },
];


const ChatBox = () => {
  const [messages, setMessages] = useState(mockedMessages);

  const msgStyle = id => 1 === id ?  styles.messagesUser1 : styles.messagesUser2;
  const addMsg = txt => setMessages([...messages, {id: 2, message: txt}]);

  return(
    <>
      <div className={styles.chatContainer}>
        <div className={styles.chatBox}>
          <div className={styles.messages}>
            { messages.map(msg => (
              <div className={msgStyle(msg.id)}>
                {msg.message}
              </div>
            ))}
          </div>
        </div>
        { /* TODO: Add better prop name to increase readibility */ }
        <MessageBox sendMessage={addMsg}/> 
      </div>
    </>
  );
};

// TODO: add propTypes

export default ChatBox;