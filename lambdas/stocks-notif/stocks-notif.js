const { getSubs, getKeys, sendNotifications } = require('utils')

module.exports.handler = async (event) => {
  return await Promise.all([getSubs(), getKeys()])
    .then(sendNotifications)
}
