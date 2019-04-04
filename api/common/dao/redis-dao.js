
const RedisConnection = require('../../../common/redis/redis-connection.js');

class RedisDao {

  constructor () {
    this.connection = new RedisConnection().getInstance();
  }

  add (key, value) {
    let that = this
    let p = new Promise(function (resolve, reject) {
      that.connection.set(key, value, function (err) {
        reject(err);
      });
    });
    return p;
  }

  get (key) {
    let that = this
    let p = new Promise(function (resolve, reject) {
      try {
        that.connection.get(key, function (err, reply) {
          resolve(reply);
        });
      } catch (e) {
        reject(e);
      }
    });
    return p;
  }

  drop () {}

}

module.exports = RedisDao;
