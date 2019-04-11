'use strict';

let Email = require('./email.js')

class Util {

  constructor () {

  }

  static hasLogin () {

  }

  static sendEmail (recipient, subject, html) {
    let email = new Email();
    email.sendEmail(recipient, subject, html);
  }

}

module.exports = Util;
