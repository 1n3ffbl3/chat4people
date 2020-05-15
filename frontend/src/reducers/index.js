import ACTIONS from "../constants";

const initialState = {
  messages: [],
  contacts: [],
  activeUser: { id: 1 },
  activeConversation: {}
};

const rootReducer = (state = initialState, action) => {
  console.log('state:', state, 'action:', action);
  switch (action.type) {
    case ACTIONS.ADD_MESSAGE:
      {
        console.log('ACTIONS.ADD_MESSAGE');
        return Object.assign({}, state, { messages: [...state.messages, { message: action.payload, id: action.senderId }] });
      }
    case ACTIONS.ADD_MESSAGES:
      {
        console.log('ACTIONS.ADD_MESSAGES');
        return Object.assign({}, state, { messages: [...state.messages, ...action.messages] });
      }
    case ACTIONS.DELETE_MESSAGE:
      return Object.assign({}, state, { messages: state.messages.filter(msg => msg.id !== action.messageId) });
    case ACTIONS.ADD_CONTACT:
      {
        console.log('ACTIONS.ADD_CONTACT');
        return Object.assign({}, state, { contacts: [...state.contacts, { constact: action.payload, id: action.contactId }] });
      }
    case ACTIONS.ADD_CONTACTS:
      {
        console.log('ACTIONS.ADD_CONTACTS');
        return Object.assign({}, state, { contacts: [...state.contacts, ...action.contacts] });
      }
    case ACTIONS.DELETE_CONTACT:
      {
        console.log('ACTIONS.DELETE_CONTACT');
        return Object.assign({}, state, { contacts: state.contacts.filter(contact => contact.id !== action.contactId) });
      }
    case ACTIONS.SET_ACTIVE_USER:
      {
        console.log('ACTIONS.SET_ACTIVE_USER');
        return Object.assign({}, state, {  activeUser: action.activeUser });
      }
    case ACTIONS.SET_ACTIVE_CONVERSATION:
      {
        console.log('ACTIONS.SET_ACTIVE_CONVERSATION');
        return Object.assign({}, state, { activeConversation: action.activeConversation });
      }
    default:
      return state;
  }
};

export default rootReducer;