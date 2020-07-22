const es = require('aws-es-client')({
  id: process.env.ES_ID,
  token: process.env.ES_SECRET,
  url: process.env.ES_ENDPOINT
})

module.exports = () => {
  return es.search({
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
  }).then(res => res.body.hits.hits[0])
}