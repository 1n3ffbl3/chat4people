import React, { useRef } from 'react';

import styles from './MessageBox.module.scss';


const MessageBox = ({ senderId, onMsgSent }) => {
  const refContainer = useRef('');

  const sendMessage = async () => {
    const message = refContainer.current.innerHTML;

    await fetch('http://localhost:1337/users/1/conversations/1/messages', {
      method: 'POST',
      body: JSON.stringify({ content: message }),
    });

    onMsgSent(message);
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

export default MessageBox;