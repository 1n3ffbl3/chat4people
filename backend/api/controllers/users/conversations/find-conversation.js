module.exports = {
  friendlyName: 'Find Conversation',

  description: 'Finds a conversation.',

  inputs: {
    conversationId: {
      type: 'number',
    },
  },

  exits: {},

  fn: async function ({ conversationId }) {

    const conversation = await Conversation.findOne({ id: conversationId })
      .populate('messages')
      .populate('users');

    // All done
    return conversation;
  }
}