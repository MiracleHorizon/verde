const jsonServer = require('json-server')

const CLIENT_API = process.env.CLIENT_API || 'http://localhost:3000'
const PORT = process.env.JSON_SERVER_PORT || 4200

const server = jsonServer.create()
server.use(jsonServer.bodyParser)

const middlewares = jsonServer.defaults()
server.use(middlewares)

const router = jsonServer.router('./json-server/db.json')
server.use(router)

server.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', CLIENT_API)
  res.header('Access-Control-Allow-Headers', '*')

  next()
})
server.use(jsonServer.rewriter({ '/api/*': '/$1' }))

server.get('/api/categories', (_req, res) => {
  const categories = router.db.get('categories')

  res.jsonp(categories)
})

server.post('/api/categories', (req, res) => {
  const categories = router.db.get('categories')
  const createdCategory = categories.add(req.body).write()

  res.jsonp(createdCategory)
})

server.listen(PORT)
