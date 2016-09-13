// import mailin from 'mailin'

// // smtp

// mailin.start({
//   port: 3100,
//   disableWebhook: false,
//   webhook: 'http://localhost:7890/webhook',
// })

// // mailin.on('authorizeUser', function(connection, username, password, done) {
// //   done(null, true)
// //   // if (username == "johnsmith" && password == "mysecret") {
// //   //   done(null, true)
// //   // } else {
// //   //   done(new Error("Unauthorized!"), false)
// //   // }
// // })

// mailin.on('startMessage', function (connection) {
//   console.log(connection)
// })

// mailin.on('message', function (connection, data, content) {
//   console.log(data)
// })

// WebApp.connectHandlers.use('/webhook', function(req, res, next) {
//   res.writeHead(200)
//   res.end(Meteor.release)
// })
