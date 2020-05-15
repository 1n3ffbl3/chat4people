const { messages, conversations, applicationUsers, userConversations } = require('./testData/index');

const knex = require('knex')({
  client: 'postgres',
  version: '7.2',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'example',
    database : 'postgres',
  },
  debug: true
});

const insertTestData = async () => {
  try {
    await knex('applicationuser').insert(applicationUsers);

    await knex('conversation').insert(conversations);

    await knex('applicationuser_conversations__conversation_users').insert(userConversations);

    await knex('message').insert(messages);

    process.exit(0);

  } catch (error) {
    console.error(error);
  }
};

insertTestData();