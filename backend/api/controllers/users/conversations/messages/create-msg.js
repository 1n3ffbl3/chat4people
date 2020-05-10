module.exports = {
  friendlyName: 'Create Message',

  description: 'Adds a message to conversation.',

  inputs: {
    conversationId: {
      type: 'number',
    },
  },

  exits: {},

  fn: async function ({ conversationId }) {
    const { content } = this.req.body;
    const message = await Message.create({ content, conversation: conversationId }).fetch();

    // All done
    return message;
  }
}