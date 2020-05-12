import ACTIONS from "../constants";


const initialState = {
  messages: []
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
        return Object.assign({}, state, { messages: [...state.messages, action.messages] });
      }
    case ACTIONS.DELETE_MESSAGE:
      return Object.assign({}, state, { messages: state.messages.filter(msg => msg.id !== action.messageId) });
    default:
      return state;
  }
};

export default rootReducer;