import React, { useRef } from 'react';
import { connect } from 'react-redux';

import styles from './MessageInput.module.scss';
import { addMessage } from '../../../actions/index';

const mapDispachToProps = dispatch => {
  return {
    addMessage: message => dispatch(addMessage(message))
  };
};

const ConnectedMessageInput = ({ addMessage }) => {
  const refContainer = useRef('');

  const sendMessage = async () => {
    const message = refContainer.current.innerHTML;

    addMessage(message, 1);
    // await fetch('http://localhost:1337/users/1/conversations/1/messages', {
    //   method: 'POST',
    //   body: JSON.stringify({ content: message }),
    // });

    // onMsgSent(message);
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

// TODO: add propTypes
const MessageInput = connect(null, mapDispachToProps)(ConnectedMessageInput);

export default MessageInput;