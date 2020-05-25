import React from 'react';
import { connect } from 'react-redux';

import styles from './Search.module.scss';
import { searchRequest } from '../../actions/index';

const mapDispatchToProps = dispatch => {
  return { searchRequest: (searchPhrase) => dispatch(searchRequest(searchPhrase)) };
};

const ConnectedSearch = ({ searchRequest }) => {

  const handleSearch = (event) => {
    const phrase = event.target.value;
    searchRequest(phrase);
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.searchInput}
        placeholder=' '
        maxLength='20'
        onChange={(event) => handleSearch(event)}
      />
      <label className={styles.label}>
        search
      </label>
      <div className={styles.bar} />
    </div>
  );
};

const Search = connect(null, mapDispatchToProps)(ConnectedSearch);

export default Search;