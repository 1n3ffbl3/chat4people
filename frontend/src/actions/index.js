import ACTIONS from "../constants";


export const addMessage = (message, senderId) => {
  return { type: ACTIONS.ADD_MESSAGE, payload: message, senderId}
};

export const addMessages = (messages) => {
  return { type: ACTIONS.ADD_MESSAGES, messages }
};


export const deleteMessage = (message) => {
  return { type: ACTIONS.DELETE_MESSAGE, messageId: message.id}
};

export const addContact = (contact, contactId) => {
  return { type: ACTIONS.ADD_CONTACT, payload: contact, contactId}
};

export const addContacts = (contacts) => {
  return { type: ACTIONS.ADD_CONTACTS, contacts}
};

export const deleteContact = (contact) => {
  return { type: ACTIONS.DELETE_CONTACT, contactId: contact.id}
};