
const RedisConnection = require('../../common/connection/redis-connection.js')

class HomeRedisDao {

	constructor () {
		this.connection = new RedisConnection().getInstance()
	}

	add (key, value) {
		let that = this
		let p = new Promise(function (resolve, reject) {
			that.connection.set(key, value, function (err) {
				console.log(err)
				reject(err)
			})
		})
		return p
	}

	get (key) {
		let that = this
		let p = new Promise(function (resolve, reject) {
			that.connection.get(key, function (err, reply) {
				resolve(reply)
			})
		})
		return p
	}

	drop () {

	}

}

module.exports = HomeRedisDao
