import ACTIONS from "../constants";

import rabbit from '../img/rabbitTime.jpg';

const initialState = {
  messages: [],
  contacts: [
    {
      img: rabbit,
      name: "Jane Austen",
      msg: "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid."
    },
    {
      img: rabbit,
      name: "Anne Frank",
      msg: "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    },
    {
      img: rabbit,
      name: "Maya Angelou",
      msg: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
    },
    {
      img: rabbit,
      name: "Queen Elizabeth I",
      msg: "Though the sex to which I belong is considered weak you will nevertheless find me a rock that bends to no wind.",
    },
    {
      img: rabbit,
      name: "Catherine the Great",
      msg: "Power without a nation's confidence is nothing.",
    },
    {
      img: rabbit,
      name: "Sojourner Truth",
      msg: "Truth is powerful and it prevails.",
    },
    {
      img: rabbit,
      name: "Rosa Parks",
      msg: "I would like to be remembered as a person who wanted to be free... so other people would be also free.",
    },
    {
      img: rabbit,
      name: "Malala Yousafzai",
      msg: "I tell my story not because it is unique, but because it is the story of many girls.",
    },
    {
      img: rabbit,
      name: "Marie Curie",
      msg: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    },
    {
      img: rabbit,
      name: "Ada Lovelace",
      msg: "That brain of mine is something more than merely mortal; as time will show.",
    },
    {
      img: rabbit,
      name: "Edith Cowan",
      msg: "Women are very desirous of their being placed on absolutely equal terms with men. We ask for neither more nor less than that.",
    },
    {
      img: rabbit,
      name: "Amelia Earhart ",
      msg: "Women must try to do things as men have tried. When they fail, their failure must be but a challenge to others.",
    },
  ],
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
    case ACTIONS.ADD_CONTACT:
      {
        console.log('ACTIONS.ADD_CONTACT');
        return Object.assign({}, state, { contacts: [...state.contacts, { constact: action.payload, id: action.contactId }] });
      }
    case ACTIONS.ADD_CONTACTS:
      {
        console.log('ACTIONS.ADD_CONTACTS');
        return Object.assign({}, state, { contacts: [...state.contacts, action.contacts] });
      }
    case ACTIONS.DELETE_CONTACT:
      {
        console.log('ACTIONS.DELETE_CONTACT');
        return Object.assign({}, state, { contacts: state.contacts.filter(contact => contact.id !== action.contactId) });
      }
    default:
      return state;
  }
};

export default rootReducer;