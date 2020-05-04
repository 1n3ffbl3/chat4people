import React from 'react';

import styles from './UserItem.module.scss';


const UserItem = () => (
  <div className={styles.userItemContainer}>
    <div className={styles.userImgWrapper}>
      <img className={styles.userImg} src='http://lorempixel.com/400/200/animals' alt='userImg'></img>
    </div>
    <div className={styles.userInfo}>
      <span>User name</span>
      <span>last message...</span>
    </div>
  </div>
);


export default UserItem;