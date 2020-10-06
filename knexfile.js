// Update with your config settings.

module.exports = {
//config for the development environment db connection
  development: {
    client: 'sqlite3', //database driver
    connection: {
      filename: './database/food.db3' //file we're using
    },
    useNullAsDefault: true //required for SQLite only
  },

//config for the production environment db connection

  production: {
    client: 'postgresql',
    connection: {
      //host
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
