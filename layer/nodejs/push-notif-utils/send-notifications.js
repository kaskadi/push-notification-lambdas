const webpush = require('web-push')

module.exports = (data) => {
  const [users, keys] = data
  webpush.setVapidDetails(
    'mailto:a.lemaire@klimapartner.de',
    keys.publicKey,
    keys.privateKey
  )
  return Promise.allSettled(users.map(notifyUser))
}

async function notifyUser (user) {
  const payload = JSON.stringify({ message: 'Hello World!' })
  return {
    user: user.email,
    pushes: await Promise.allSettled(user.subscriptions.map(sub => webpush.sendNotification(sub, payload)))
  }
}
