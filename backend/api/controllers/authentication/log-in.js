module.exports = {
  friendlyName: 'Authenticate a user',

  description: '',

  inputs: {},

  exits: {},

  fn: async function () {
    const { username, password } = this.req.body;

    const user = await ApplicationUser.findOne({username});
    if (!user) {
      // User does not exist, throw an error;
      console.debug('User does not exist, 400');
      return this.res.badRequest();
    }

    if (user.password !== password) {
      console.debug('User does not exist, 400');
      return this.res.badRequest();
    }

    // All done.
    return { id: user.id, name: `${user.firstname} ${user.lastname}` };
  }
};
