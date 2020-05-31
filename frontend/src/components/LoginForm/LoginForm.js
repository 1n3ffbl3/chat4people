import React from 'react';
import { connect } from 'react-redux';

import styles from './LoginForm.module.scss';
import { logIn } from '../../actions';

const mapDispatchToProps = dispatch => {
  return {
    logIn: (user) => dispatch(logIn(user))
  };
};

const ConnectedLoginForm = ({ logIn }) => {

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;

    const response = await fetch(`http://localhost:1337/auth/login`, {
      method: 'POST',
      body: JSON.stringify({username, password})
    });

    if (!response.ok) {
      // TODO: Add Validation logic
      return;
    }

    const user = await response.json();
    logIn({ id: user.id, name: user.name });
  };

  return(
    <div className={styles.modal}>
      <form className={styles.form} onSubmit={(event) => handleFormSubmit(event)}>
        <h2>Login</h2>
        <div className={styles.wrapper}>
          <input
            className={styles.input}
            placeholder=' '
            maxLength='25'
            type="text" 
            id="username" 
            name="username"
          />
          <label className={styles.label}>
            Username
          </label>
        </div>
        <div className={styles.wrapper}>
          <input
            className={styles.input}
            placeholder=' '
            maxLength='25'
            type="password" 
            id="password" 
            name="password"
          />
          <label className={styles.label}>
            Password
          </label>
        </div>
        <button 
          className={styles.buttonForm}
          type="submit"
          value="Submit">
          Submit
        </button>
      </form>
    </div>
  )
};

const LoginForm = connect(null, mapDispatchToProps)(ConnectedLoginForm);

export default LoginForm;