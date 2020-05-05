import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactItem.module.scss';


const ContactItem = ({ image, userName, message }) => (
  <li className={styles.item}>
    <div className={styles.imgWrapper}>
      <img className={styles.img} src={image}></img>
    </div>
    <div className={styles.details}>
      <span className={styles.name}>{userName}</span>
      <span className={styles.msg}>{message}</span>
    </div>
  </li>
);

ContactItem.propTypes = {
  image: PropTypes.string,
  userName: PropTypes.string,
  message: PropTypes.string,
};


export default ContactItem;