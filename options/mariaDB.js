const options = require('knex')({
  client: 'mysql',
  connection: {
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '',
    database : 'clase16db',
  },
  pool: { min: 0, max: 7 }
});

module.exports = {
  options
}