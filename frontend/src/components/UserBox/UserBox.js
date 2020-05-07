import React from 'react';

import styles from './UserBox.module.scss';
import ContactList from './ContactList';
import Search from '../Search/Search';
import rabbit from '../../img/rabbitTime.jpg';

const UserBox = () => (
  <div className={styles.userBoxContainer}>
    <div className={styles.user}>
      <div className={styles.ownerImgWrapper}>
        <img className={styles.img} src={rabbit}></img>
      </div>
      <div className={styles.ownerDetails}>
        <h5 className={styles.userLogin}>user</h5>
        <Search/>
      </div>
    </div>
    <ContactList/>
  </div>
);

export default UserBox;