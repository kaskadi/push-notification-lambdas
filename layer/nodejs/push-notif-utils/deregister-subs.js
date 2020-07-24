module.exports = esClient => userNotifs => {
  const deadNotifs = getDeadNotifs(userNotifs)
  if (deadNotifs.length > 0) {
    return esClient.bulk({
      refresh: true,
      body: getBulkBody(deadNotifs)
    })
  }
  return 'No dead endpoints!'
}

function getDeadNotifs (userNotifs) {
  const filterDeadEndpoint = push => push.status === 'rejected' && push.reason.statusCode === 410
  const userNotifsWithDeadEndpoints = userNotifs.filter(userNotif => userNotif.value.pushes.filter(filterDeadEndpoint).length > 0)
  return userNotifsWithDeadEndpoints.map(userNotif => {
    return {
      user: userNotif.value.user,
      deadEndpoints: userNotif.value.pushes.filter(filterDeadEndpoint).map(deadEndpoint => deadEndpoint.reason.endpoint)
    }
  })
}

function getBulkBody (deadNotifs) {
  return deadNotifs.flatMap(deadNotif => deadNotif.deadEndpoints.flatMap(getOpBodyDuplets(deadNotif.user)))
}

function getOpBodyDuplets (user) {
  return deadEndpoint => {
    const op = { update: { _id: user, _index: 'users'} }
    const body = {
      script : {
        lang: 'painless',
        source: 'def matchSub; def subs = ctx._source.subscriptions; for (sub in subs) { if (sub.endpoint == params.endpoint) { matchSub = sub; } } subs.remove(subs.indexOf(matchSub))',
        params: {
          endpoint: deadEndpoint
        }
      }
    }
    return [op, body]
  }
}
