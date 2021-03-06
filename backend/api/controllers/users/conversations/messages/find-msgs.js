module.exports = {
  friendlyName: 'Find Messages',

  description: 'Finds messages.',

  inputs: {
    conversationId: {
      type: 'number',
    },
  },

  exits: {},

  fn: async function ({ conversationId }) {

    const messages = await Message.find({ conversation: conversationId });
    // All done
    return messages;
  }
};
