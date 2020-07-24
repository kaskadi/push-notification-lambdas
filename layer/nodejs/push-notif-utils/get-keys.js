module.exports = esClient => () => {
  return esClient.search({
    index: 'push-keys',
    body: {
      from: 0,
      size: 5,
      query: {
        match: {
          app: 'kaskadi'
        }
      }
    }
  }).then(res => res.body.hits.hits[0]._source)
}