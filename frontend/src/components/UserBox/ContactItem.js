import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './ContactItem.module.scss';
import { activeConversation } from './../../actions';


const mapDispachToProps = dispatch => {
  return { setActiveConversation: (conversationId, idOfReceiver) => dispatch(activeConversation(conversationId, idOfReceiver)) };
};

const ConnectedContactItem = ({ idOfReceiver, image, userName, message, conversationId, setActiveConversation }) => {
  
  const handleActiveContact = () => {
    setActiveConversation(conversationId, idOfReceiver);
  };

  return (
    <li className={styles.item} onClick={() => handleActiveContact()}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={image}></img>
      </div>
      <div className={styles.details}>
        <span className={styles.name}>{userName}</span>
        <span className={styles.msg}>{message}</span>
      </div>
    </li>
  )
};

ConnectedContactItem.propTypes = {
  idOfReceiver: PropTypes.number,
  image: PropTypes.string,
  userName: PropTypes.string,
  message: PropTypes.string,
  conversationId: PropTypes.number,
  setActiveConversation: PropTypes.func,
};


const ContactItem = connect(null, mapDispachToProps)(ConnectedContactItem);

export default ContactItem;