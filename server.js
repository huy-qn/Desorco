const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

// sample url /authors/A/1
server.get('/authors/:character/:page/', (req, res) => {
  const actualPage = '/authors'
  const queryParams = { 
      character: req.params.character,
      page: req.params.page,
  } 
  app.render(req, res, actualPage, queryParams)
})

// sample url /author/1251-HuyNguyen/1
server.get('/author/:authorId-:authorName/:page/', (req, res) => {
  const actualPage = '/author'
  const queryParams = { 
      authorId: req.params.authorId,
      authorName: req.params.authorName,
      page: req.params.page,
  } 
  app.render(req, res, actualPage, queryParams)
})

// sample url /topic/122-Motivational-Quotes/1
server.get('/topic/:totalQuotes-:topicName/:page/', (req, res) => {
  const actualPage = '/topic'
  const queryParams = { 
      totalQuotesNumber: req.params.totalQuotes,
      topicName: req.params.topicName,
      page: req.params.page,
  } 
  app.render(req, res, actualPage, queryParams)
})

// sample url /topic/122-Motivational-Quotes/1
server.get('/topic/:topicName/:page/', (req, res) => {
  const actualPage = '/topic'
  const queryParams = { 
      totalQuotesNumber: req.params.totalQuotes,
      topicName: req.params.topicName,
      page: req.params.page,
  } 
  app.render(req, res, actualPage, queryParams)
})

// // sample url /author/1251-HuyNguyen - we need to get this work, one solution might be using redirect 
//   server.get('/author/:authorId-:authorName', (req, res) => {
//     const actualPage = '/author'
//     const queryParams = { 
//         authorId: req.params.authorId,
//         authorName: req.params.authorName
//     } 
//     app.render(req, res, actualPage, queryParams)
//   })

// sample url /quote/1516
server.get('/quote/:quoteId', (req, res) => {
  const actualPage = '/quote'
  const queryParams = { 
      quoteId: req.params.quoteId,
  } 
  app.render(req, res, actualPage, queryParams)
})

  
  server.get('*', (req, res) => {
    return handle(req, res)
  })
    
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})