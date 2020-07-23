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

function notifyUser (user) {
  const payload = JSON.stringify({ message: 'Hello World!' })
  const sendNotif2Sub = sub => webpush.sendNotification(sub, payload).catch(err => err.statusCode === 410 ? deregisterSub(user, sub) : err)
  return Promise.allSettled(user.subscriptions.map(sendNotif2Sub))
}

function deregisterSub (user, sub) {
  const es = require('aws-es-client')({
    id: process.env.ES_ID,
    token: process.env.ES_SECRET,
    url: process.env.ES_ENDPOINT
  })
  return es.updateByQuery({
    index: 'users',
    refresh: true,
    body: {
      script: getScript(sub),
      query: getQuery(user, sub)
    }
  })
}

function getScript (sub) {
  return {
    lang: 'painless',
    source: 'ctx._source.subscriptions.remove(ctx._source.subscriptions.indexOf(params.sub))',
    params: {
      sub: sub
    }
  }
}

function getQuery (user, sub) {
  return {
    bool: {
      must: {
        match: {
          _id: user
        }
      },
      filter: {
        match: {
          'subscriptions.endpoint': sub.endpoint
        }
      }
    }
  }
}
