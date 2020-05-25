import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './MessageInput.module.scss';
import { addMessage } from '../../../actions/index';

const mapStateToProps = state => {
  return {
    activeUserId: state.activeUser.id,
    activeConversation: state.activeConversation,
  };
};

const mapDispachToProps = dispatch => {
  return {
    addMessage: (message, activeUserId) => dispatch(addMessage(message, activeUserId))
  };
};

const ConnectedMessageInput = ({ addMessage, activeUserId, activeConversation }) => {
  const refContainer = useRef('');

  const sendMessage = async () => {
    const message = refContainer.current.innerHTML;
    let conversationId = activeConversation.conversationId;

    // conversation doesn't exist yet, first message
    if (!conversationId) 
    {
      const response = await fetch(`http://localhost:1337/users/${activeUserId}/conversations/`, {
        method: 'POST',
        body: JSON.stringify({ idOfReceiver: activeConversation.idOfReceiver })
      });
      const conversation = await response.json();
      // here access newly created conversation id and assign it to the conversationId
      conversationId = conversation.id;
    }

    await fetch(`http://localhost:1337/users/${activeUserId}/conversations/${conversationId}/messages`, {
      method: 'POST',
      body: JSON.stringify({ content: message }),
    });

    addMessage(message, activeUserId);

    refContainer.current.innerHTML = '';
  };

  return (
    <div className={styles.messageBox}>
      { /* TODO: Read value from contentEditable div and pass to sendMessage */}
      <div className={styles.msgType} contentEditable="true" ref={refContainer}></div>
      <button className={styles.btnSendMsg} onClick={() => sendMessage()}>>></button>
    </div>
  )
};

ConnectedMessageInput.propTypes = {
  addMessage: PropTypes.func,
  activeUserId: PropTypes.number,
  activeConversation: PropTypes.object,
}
// TODO: add propTypes
const MessageInput = connect(mapStateToProps, mapDispachToProps)(ConnectedMessageInput);

export default MessageInput;