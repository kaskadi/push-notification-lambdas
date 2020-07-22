const getSubs = require('./helpers/get-subs.js')
const getKeys = require('./helpers/get-keys.js')
const sendNotifications = require('./helpers/send-notifications.js')

module.exports.handler = async (event) => {
  return await Promise.all([getSubs(), getKeys()])
    .then(sendNotifications)
}
