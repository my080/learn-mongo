
const redisConfig = {
  host: 'localhost', // default
  port: 6379, //default
  max_clients: 30, // defalut
  perform_checks: false, // checks for needed push/pop functionality
  database: 0 // database number to use
  // options: {
  // auth_pass: 'my080'
  // } options for createClient of node-redis, optional
}

module.exports = redisConfig
