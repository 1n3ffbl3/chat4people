module.exports = {
  friendlyName: 'Find Conversations',

  description: 'Finds all conversations.',

  inputs: {
  },

  exits: {},


  fn: async function () {

    const conversations = await Conversation.find()
      .populate('messages')
      .populate('users');

    // All done
    return conversations;
  }
}