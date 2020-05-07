import React from 'react';

import styles from './Search.module.scss';


const Search = () => {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.searchInput}
        placeholder=' '
        maxLength='20'
      />
      <label className={styles.label}>
        search
      </label>
      <div className={styles.bar} />
    </div>
  );
};


export default Search;