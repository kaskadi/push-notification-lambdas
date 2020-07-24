module.exports = deadNotifs => {
  console.log(JSON.stringify(deadNotifs, null, 2))
  return {
    hasDeadEndpoints: String(deadNotifs.length > 0), // as for now (24/07/2020) AWS CloudFormation is transforming Boolean/Numbers in EventBridge pattern to strings so we're doing the same here to make sure the event is caught
    deadNotifs
  }
}
