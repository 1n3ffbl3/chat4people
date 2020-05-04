import React from 'react';

import UserList from './UserList';
import styles from './UserBox.module.scss';

const UserBox = () => (
  <div className={styles.userBoxContainer}>
    <UserList/>
  </div>
);

export default UserBox;