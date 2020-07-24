module.exports = deadNotifs => {
  return {
    hasDeadEndpoints: deadNotifs.length > 0,
    deadNotifs
  }
}
