module.exports = {
  friendlyName: 'Find Messages',

  description: 'Finds messages.',

  inputs: {},

  exits: {},

  fn: async function () {

    const messages = await Message.find();

    // All done
    return messages;
  }
}