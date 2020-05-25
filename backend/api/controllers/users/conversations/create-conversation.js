module.exports = {
  friendlyName: 'Create Conversation',

  description: 'Creates a conversation between two users.',

  inputs: {
    userId: {
      type: 'number',
    },
  },

  exits: {},

  fn: async function ({ userId }) {

    const { idOfReceiver } = this.req.body;

    const conversation = await Conversation.create().fetch();
    await Conversation.addToCollection(conversation.id, 'users', [userId, idOfReceiver]);

    // All done
    return conversation;
  }
};
