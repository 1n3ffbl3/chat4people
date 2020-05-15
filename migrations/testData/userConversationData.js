const userConversations = [
  // 1n3ffbl3 conversation with Jane Austen
  {
    id: 1,
    applicationuser_conversations: 1, // applicationUserId
    conversation_users: 1 // conversationId
  },
  // Jane Austen conversation with 1n3ffbl3
  {
    id: 2,
    applicationuser_conversations: 2, // applicationUserId
    conversation_users: 1 // conversationId
  },
  // 1n3ffbl3 conversation with Anne Frank
  {
    id: 3,
    applicationuser_conversations: 1, // applicationUserId
    conversation_users: 2 // conversationId
  },
  // Anne Frank conversation with 1n3ffbl3
  {
    id: 4,
    applicationuser_conversations: 3, // applicationUserId
    conversation_users: 2 // conversationId
  }
];

module.exports = userConversations;