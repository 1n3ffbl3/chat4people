module.exports = {
  friendlyName: 'Find Message',

  description: 'Finds a message.',

  inputs: {
    messageId: {
      type: 'number',
    },
  },

  exits: {},

  fn: async function ({ messageId }) {

    const message = await Message.findOne({ id: messageId });

    // All done
    return message;
  }
}