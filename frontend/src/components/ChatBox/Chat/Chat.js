import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import styles from './Chat.module.scss';
import { addMessages } from '../../../actions/index';


const mapStateToProps = state => {
  return { 
    messages: state.messages, 
    activeUserId: state.activeUser.id, 
    activeConversationId: state.activeConversation.conversationId, 
  };
};

const mapDispatchToProps = dispatch => {
  return { addMessages: messages => dispatch(addMessages(messages)) };
};

const ConnectedChat = ({ messages, addMessages, activeUserId, activeConversationId }) => {
  // TODO: Move to ChatBox (parent)
  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch(`http://localhost:1337/users/${activeUserId}/conversations/${activeConversationId}/messages`);
      const data = await response.json();
      const msgs = data.map(msg => ({ id: msg.senderId, message: msg.content }));
      addMessages(msgs);
    }

    if (!activeConversationId) {
      return;
    }

    fetchData();
  }, [activeConversationId]);


  const msgStyle = id => {
    return id !== activeUserId ? styles.messagesUser1 : styles.messagesUser2;
  }

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

const Chat = connect(mapStateToProps, mapDispatchToProps)(ConnectedChat);

export default Chat;