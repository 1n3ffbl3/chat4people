module.exports = {
  friendlyName: 'All',

  description: 'All users.',

  inputs: {},

  exits: {},

  fn: async function () {
    const users = await ApplicationUser.find();

    const mappedUsers = users.map(user => {
      const { id, firstname, lastname } = user;

      return {
        id,
        firstname,
        lastname,
      };
    });

    // All done.
    return mappedUsers;
  }
};
