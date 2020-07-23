const { getUsers, getKeys, sendNotifications, deregisterSubs } = require('push-notif-utils')

module.exports.handler = async (event) => {
  return await Promise.all([getUsers(), getKeys()])
    .then(sendNotifications)
    .then(deregisterSubs)
}
