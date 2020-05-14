import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ContactItem from './ContactItem.js';
import styles from './ContactList.module.scss';
import { addContacts } from '../../actions/index';

const mapStateToProps = state => {
  return { contacts: state.contacts };
};

const mapDispatchToProps = dispatch => {
  return { addContacts: contacts => dispatch(addContacts(contacts))};
};

const ConnectedContactList = ({ contacts, addContacts }) => {

  // useEffect(() => {
  //   const fetchContacts = async () => {
  //     const response = await fetch('http://localhost:1337/users/1/conversations');
  //     const conversations = await response.json();
  //     const contactData = conversations.map(conversation => {
  //       const user = conversation.users.filter(u => u.id !== 1)[0];
  //       const message = conversation.messages.length > 0 ? conversation.messages[0].content : '';

  //       return {
  //         img: rabbit,
  //         name: "${user.firstname} ${user.lastname}",
  //         msg: message
  //       }
  //     });

  //     setContacts(contactData);
  //   };

  //   // fetchContacts();
  // }, []);
  return (
    <div className={styles.contactList}>
      <ul className={styles.list}>
        {
          contacts.map(contact => (
            <ContactItem
              image={contact.img}
              userName={contact.name}
              message={contact.msg} />
          ))
        }
      </ul>
    </div>
  );
};

const ContactList = connect(mapStateToProps, mapDispatchToProps)(ConnectedContactList);

export default ContactList;