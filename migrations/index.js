const contacts = require('./testData/applicationuserData');

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

knex('applicationuser').insert(contacts)
.then(() => {
  console.log('finished');
}).catch(e => {
  console.error(e);
});