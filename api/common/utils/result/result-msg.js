
const resultCodes = require('./result-codes')

class ResultMsg {

  constructor () {

  }

  static getResultCodes () {
    return resultCodes;
  }

  static success (data) {
    let result = {
      msg: 'success',
      data: data,
      code: 200
    }
    return result;
  }

  static error (data) {
    let result = {
      msg: 'error',
      data: data,
      code: 500
    }
    return result;
  }

  static result (data, code, msg) {
    let result = {
      msg: msg,
      data: data,
      code: code
    }
    return result;
  }

}

module.exports = ResultMsg;
