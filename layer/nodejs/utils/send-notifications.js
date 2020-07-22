const webpush = require('web-push')

module.exports = (res) => {
  const [subs, keys] = res
  webpush.setVapidDetails(
    'mailto:a.lemaire@klimapartner.de',
    keys.publicKey,
    keys.privateKey
  )
  const payload = {
    message: 'Hello World!'
  }
  return Promise.all(subs.map(sub => webpush.sendNotification(sub, JSON.stringify(payload))))
}