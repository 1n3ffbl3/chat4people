import ACTIONS from "../constants";

const initialState = {
  messages: [],
  contacts: [],
  allContacts: [],
  activeUser: {},
  activeConversation: {},
  search: {
    isActive: false,
    searchPhrase: ''
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_MESSAGE:
        return Object.assign({}, state, { messages: [...state.messages, { message: action.payload, id: action.senderId }] });
    case ACTIONS.ADD_MESSAGES:
        return Object.assign({}, state, { messages: [...action.messages] });
    case ACTIONS.DELETE_MESSAGE:
        return Object.assign({}, state, { messages: state.messages.filter(msg => msg.id !== action.messageId) });
    case ACTIONS.ADD_CONTACT:
        return Object.assign({}, state, { contacts: [...state.contacts, { constact: action.payload, id: action.contactId }] });
    case ACTIONS.ADD_CONTACTS:
        return Object.assign({}, state, { contacts: [...action.contacts] });
    case ACTIONS.DELETE_CONTACT:
        return Object.assign({}, state, { contacts: state.contacts.filter(contact => contact.id !== action.contactId) });
    case ACTIONS.SET_ACTIVE_USER:
        return Object.assign({}, state, { activeUser: action.activeUser });
    case ACTIONS.SET_ACTIVE_CONVERSATION:
        return Object.assign({}, state, { activeConversation: action.activeConversation });
    case ACTIONS.ADD_ALL_CONTACTS:
        return Object.assign({}, state, { allContacts: [...action.allContacts] });
    case ACTIONS.SEARCH_REQUEST:
        return Object.assign({}, state, { search: {
          isActive: action.search.isActive,
          searchPhrase: action.search.searchPhrase
        }});
    case ACTIONS.LOGIN:
      return Object.assign({}, state, { activeUser: action.user });
    default:
      return state;
  }
};

export default rootReducer;