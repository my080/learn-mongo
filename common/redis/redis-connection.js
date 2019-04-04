"use strict"

const redisConfig = require('../../../config/redis-config.js')
const RedisPool = require('redis-connection-pool')

class RedisConnection {

	constructor () {
		this.config = redisConfig
	}

	getInstance () {
		let redisPool = RedisPool('myRedisPool', this.config)
		return redisPool
	}

}

module.exports = RedisConnection
