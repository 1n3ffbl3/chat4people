import React from 'react';
import { connect } from 'react-redux';

import styles from './AppContainer.module.scss';
import UserBox from '../UserBox/UserBox';
import ChatBox from '../ChatBox/ChatBox';
import LoginForm from '../LoginForm/LoginForm';

const mapStateToProps = state => {
  return {
    activeUser: state.activeUser
  };
};

const ConnectedAppContainer = ({ activeUser }) => {
  
  if (!activeUser.id) {
    return (
      <LoginForm/>
    )
  }

  return (
    <div className={styles.chat}>
      <UserBox/>
      <ChatBox/>
    </div>
  );
}

const AppContainer = connect(mapStateToProps)(ConnectedAppContainer);

export default AppContainer;