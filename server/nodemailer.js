var nodemailer = require('nodemailer')

var smtpConfig = {
  host: 'localhost',
  port: 3025,
  tls: {
    rejectUnauthorized: false
  }
}

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport(smtpConfig)

// setup e-mail data with unicode symbols
var mailOptions = {
  from: '"Fred Foo 👥" <foo@blurdybloop.com>', // sender address
  to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
  subject: 'Hello ✔', // Subject line
  text: 'Hello world 🐴', // plaintext body
  html: '<b>Hello world 🐴</b>', // html body
  attachments: [{
    path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
  }]
}

Meteor.methods({
  'mail:send' (opt) {
    transporter.sendMail(opt, Meteor.bindEnvironment(function(error, info) {
      if (error) {
        return console.log(error)
      }
      opt.createdAt = new Date()
      // return Mails.insert(opt)
    }))
  }
})
