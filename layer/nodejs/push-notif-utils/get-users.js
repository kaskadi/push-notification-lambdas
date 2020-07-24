module.exports = esClient => () => {
  return esClient.search({
    index: 'users',
    body: {
      from: 0,
      size: 50,
      query: {
        match_all: {}
      }
    }
  })
    .then(res => res.body.hits.hits.map(doc => doc._source))
}