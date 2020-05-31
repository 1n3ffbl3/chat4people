import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import styles from './UserBox.module.scss';
import ContactList from './ContactList';
import Search from '../Search/Search';
import rabbit from '../../img/rabbitTime.jpg';
import { addAllContacts } from '../../actions/index';

const mapStateToProps = state => {
  return {
    name: state.activeUser.name
  };
};

const mapDispatchToProps = dispatch => {
  return { 
    addAllContacts: contacts => dispatch(addAllContacts(contacts))
  };
};

const ConnectedUserBox = ({ name, addAllContacts }) => {

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await fetch(`http://localhost:1337/users`);
      const allContacts = await response.json();
       
      const mappedAllContacts = allContacts.map(contact => {
        return {
          id: contact.id,
          name: `${contact.firstname} ${contact.lastname}`,
          image: rabbit
        }
      });

      addAllContacts(mappedAllContacts);
    };
  
    fetchContacts();
  },[]);

  return(
    <div className={styles.userBoxContainer}>
      <div className={styles.user}>
        <div className={styles.ownerImgWrapper}>
          <img className={styles.img} src={rabbit}></img>
        </div>
        <div className={styles.ownerDetails}>
          <h5 className={styles.userLogin}>{name}</h5>
          <Search/>
        </div>
      </div>
      <ContactList/>
    </div>
  );
};

const UserBox = connect(mapStateToProps, mapDispatchToProps)(ConnectedUserBox);

export default UserBox;