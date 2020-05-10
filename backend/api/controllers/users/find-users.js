module.exports = {
  friendlyName: 'All',

  description: 'All users.',

  inputs: {},

  exits: {},

  fn: async function () {
    const users = await ApplicationUser.find();

    // All done.
    return users;
  }
};
