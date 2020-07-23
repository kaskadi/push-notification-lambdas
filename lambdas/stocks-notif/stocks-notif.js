const { getUsers, getKeys, sendNotifications } = require('push-notif-utils')

module.exports.handler = async (event) => {
  return await Promise.all([getUsers(), getKeys()])
    .then(sendNotifications)
}
