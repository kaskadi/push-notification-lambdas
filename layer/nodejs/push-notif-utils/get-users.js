const es = require('aws-es-client')({
  id: process.env.ES_ID,
  token: process.env.ES_SECRET,
  url: process.env.ES_ENDPOINT
})

module.exports = () => {
  return es.search({
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