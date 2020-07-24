const { getUsers, getKeys, sendNotifications, getDeadNotifs, buildEvent } = require('push-notif-utils')

module.exports.handler = async (event) => {
  return await Promise.all([getUsers(), getKeys()])
    .then(sendNotifications)
    .then(getDeadNotifs)
    .then(buildEvent)
    .then(ev => {
      console.log(JSON.stringify(ev, null, 2))
      return ev
    })
}
