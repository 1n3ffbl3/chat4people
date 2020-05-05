import React from 'react';

import ContactList from './ContactList';
import styles from './UserBox.module.scss';
import rabbit from '../../img/rabbitTime.jpg';

const UserBox = () => (
  <div className={styles.userBoxContainer}>
    <div className={styles.user}>
      <div className={styles.ownerImgWrapper}>
        <img className={styles.img} src={rabbit}></img>
      </div>
      <div className={styles.ownerDetails}>
        <span>USER LOGIN</span>
        <input placeholder='search'></input>
      </div>
    </div>
    <ContactList/>
  </div>
);

export default UserBox;