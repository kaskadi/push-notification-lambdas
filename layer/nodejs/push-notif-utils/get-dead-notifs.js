module.exports = userNotifs => {
  const filterDeadEndpoint = push => push.status === 'rejected' && (push.reason.statusCode === 410 || push.reason.statusCode === 403)
  const userNotifsWithDeadEndpoints = userNotifs.filter(userNotif => userNotif.value.pushes.filter(filterDeadEndpoint).length > 0)
  return userNotifsWithDeadEndpoints.map(userNotif => {
    return {
      user: userNotif.value.user,
      deadEndpoints: userNotif.value.pushes.filter(filterDeadEndpoint).map(deadEndpoint => deadEndpoint.reason.endpoint)
    }
  })
}
