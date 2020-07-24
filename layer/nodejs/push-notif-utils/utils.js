const es = require('aws-es-client')({
  id: process.env.ES_ID,
  token: process.env.ES_SECRET,
  url: process.env.ES_ENDPOINT
})

module.exports = {
  getKeys: require('./get-keys.js')(es),
  getUsers: require('./get-users.js')(es),
  sendNotifications: require('./send-notifications.js'),
  getDeadNotifs: require('./get-dead-notifs.js'),
  buildEvent: require('./build-event.js'),
  deregisterSubs: require('./deregister-subs.js')(es)
}