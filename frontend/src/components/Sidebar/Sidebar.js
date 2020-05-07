import React from 'react';

import styles from './Sidebar.module.scss';
import Media from '../Media/Media';
import Search from '../Search/Search';


const Sidebar = () => (
  <div className={styles.sidebarContainer}>
    <div className={styles.searchWrapper}>
      <Search/>
    </div>
    <Media/>
  </div>
);

export default Sidebar;