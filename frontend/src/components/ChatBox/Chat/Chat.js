import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import styles from './Chat.module.scss';
import { addMessages } from '../../../actions/index';


const mapStateToProps = state => {
  return { messages: state.messages };
};

const mapDispachToProps = dispatch => {
  return {
    addMessages: messages => dispatch(addMessages(messages))
  };
};

const ConnectedChat = ({ messages, addMessages }) => {
  // const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('http://localhost:1337/users/1/conversations/1/messages');
  //     const data = await response.json();
  //     const msgs = data.map(msg => ({ id: msg.senderId, message: msg.content }));
  //     addMessages(msgs);
  //   }
  //   fetchData();
  // }, []);

  const msgStyle = id => 2 === id ? styles.messagesUser1 : styles.messagesUser2;

  console.log('messages', messages);

  return (
    <div className={styles.chatBox}>
      <div className={styles.messages}>
        {messages.map(msg => (
          <div className={msgStyle(msg.id)}>
            {msg.message}
          </div>
        ))}
      </div>
    </div>
  );
};

// TODO: add propTypes

const Chat = connect(mapStateToProps, mapDispachToProps)(ConnectedChat);

export default Chat;