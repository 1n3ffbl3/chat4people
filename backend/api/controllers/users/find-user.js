module.exports = {
  friendlyName: 'Find one',

  description: 'Finds a user.',

  inputs: {
    userId: {
      type: 'number',
    }
  },

  exits: {},

  fn: async function ({ userId }) {
    const user = await ApplicationUser.findOne({id: userId});

    // All done.
    return user;

  }


};
