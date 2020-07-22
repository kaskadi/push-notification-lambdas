const { getSubs, getKeys, sendNotifications } = require('push-notif-utils')

module.exports.handler = async (event) => {
  return await Promise.all([getSubs(), getKeys()])
    .then(sendNotifications)
}
