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

