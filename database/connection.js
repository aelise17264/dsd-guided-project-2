//give the api the ability to read the configuration dynamically
const knex = require('knex')

const knexFile = require('../knexfile')

// const config = knexFile.development

//what if what we have is const environment = 'production'
//const config = knexFile[environment]
const environment = process.env.NODE_ENV || 'development'

const config = knexFile[environment]

module.exports = knex(config)

//on heroku NOVE_ENV will be 'production'