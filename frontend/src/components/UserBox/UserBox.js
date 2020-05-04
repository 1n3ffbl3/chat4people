import React from 'react';
import styles from './UserBox.module.scss';

const UserBox = () => (
  <div className={styles.userBoxContainer}>
    <div>
      <img src='../img/rabbitTime' alt='userImg'></img>
    </div>
    <div>
      <h2>User name</h2>
      <p>last message...</p>
    </div>
  </div>
);

export default UserBox;