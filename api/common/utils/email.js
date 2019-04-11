'use strict';

const emailConfig = require('../config/email-config.js');
let nodemailer = require('nodemailer');
let smtpTransport = require('nodemailer-smtp-transport');

class Email {

  constructor () {
    this.config = emailConfig;
    this.smtpTransport = nodemailer.createTransport(smtpTransport({
      service: emailConfig.service,
      auth: {
        user: emailConfig.user,
        pass: emailConfig.pass
      }
    }));
  }

  sendEmail (recipient, subject, html) {
    this.smtpTransport.sendMail({
      from: emailConfig.user,
      to: recipient,
      subject: subject,
      html: html
    }, function (error) {                                                                                              // 有两个参数：第一个 error，第二个是 response
      if (error) {
        console.log(error);
      }
      console.log('发送成功');
    });
  }

}

module.exports = Email
