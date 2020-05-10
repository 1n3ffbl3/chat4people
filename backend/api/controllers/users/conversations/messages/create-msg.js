module.exports = {
  friendlyName: 'Create Message',

  description: 'Adds a message to conversation.',

  inputs: {
    userId: {
      type: 'number',
    },
    conversationId: {
      type: 'number',
    },
  },

  exits: {},

  fn: async function ({ conversationId, userId }) {
    const { content } = this.req.body;
    const message = await Message.create({ content, conversation: conversationId, senderId: userId }).fetch();

    // All done
    return message;
  }
}