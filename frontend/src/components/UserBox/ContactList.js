import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ContactItem from './ContactItem.js';
import styles from './ContactList.module.scss';
import { addContacts } from '../../actions/index';
import rabbit from '../../img/rabbitTime.jpg';

const mapStateToProps = state => {
  return { 
    contacts: state.contacts,
    allContacts: state.allContacts,
    activeUserId: state.activeUser.id,
    search: state.search
  };
};

const mapDispatchToProps = dispatch => {
  return { addContacts: contacts => dispatch(addContacts(contacts))};
};

const enrichContactData = (conversationContacts, allContacts) => {
  return allContacts.map(contact => {
    // User with whom we have a conversatsion, if we don't undefined is returned
    const conversationUser = conversationContacts.find(c => c.id === contact.id);
    if (!conversationUser) {
      return contact;
    }

    return conversationUser;
  })
}

const ConnectedContactList = ({ contacts, addContacts, allContacts, activeUserId, search }) => {

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await fetch(`http://localhost:1337/users/${activeUserId}/conversations`);
      const conversations = await response.json();
      const contactData = conversations.map(conversation => {
        const user = conversation.users.filter(u => u.id !== 1)[0];
        const message = conversation.messages.length > 0 ? conversation.messages[0].content : '';

        return {
          id: user.id,
          img: rabbit,
          name: `${user.firstname} ${user.lastname}`,
          msg: message,
          conversationId: conversation.id,
        }
      });

      addContacts(contactData);
    };

    fetchContacts();
  }, []);

  const { isActive: isSearchActive, searchPhrase } = search;
  let contactsToDisplay = [];
  
  if (isSearchActive) {
    const filteredContacts = allContacts.filter(contact => contact.name.toLowerCase().includes(searchPhrase.toLowerCase()))
    contactsToDisplay = enrichContactData(contacts, filteredContacts);
  } else {
    contactsToDisplay = contacts;
  }

  return (
    <div className={styles.contactList}>
      <ul className={styles.list}>
        {
          contactsToDisplay.map((contact) => (
            <ContactItem
              key={contact.id}
              idOfReceiver={contact.id}
              image={contact.img}
              userName={contact.name}
              message={contact.msg}
              conversationId={contact.conversationId} />
          ))
        }
      </ul>
    </div>
  );
};

const ContactList = connect(mapStateToProps, mapDispatchToProps)(ConnectedContactList);

export default ContactList;