const jsonServer = require('json-server')

const CLIENT_API = process.env.CLIENT_API || 'http://localhost:3000'
const PORT = process.env.JSON_SERVER_PORT || 4200

const server = jsonServer.create()
server.use(jsonServer.bodyParser)

const middlewares = jsonServer.defaults()
server.use(middlewares)

server.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', CLIENT_API)
  res.header('Access-Control-Allow-Headers', '*')

  next()
})

server.get('/categories/:id/metadata', (req, res) => {
  const categoryId = req.params.id
  const category = router.db.get('categories').find({ id: categoryId }).value()

  res.jsonp({
    title: category.title
  })
})

server.get('/subcategories/:id/metadata', (req, res) => {
  const subcategoryId = req.params.id
  const subcategory = router.db
    .get('subcategories')
    .find({ id: subcategoryId })
    .value()

  res.jsonp({
    title: subcategory.title
  })
})

const router = jsonServer.router('./json-server/db.json')
server.use(router)

server.listen(PORT)
