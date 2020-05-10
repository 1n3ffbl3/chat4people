module.exports = {

  friendlyName: 'Create user',

  description: 'Add a user to datastore.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    const { username, firstname, password, lastname } = this.req.body;
    const createdUser = await ApplicationUser.create({ username, firstname, lastname, password }).fetch();

    return createdUser;
  }

}