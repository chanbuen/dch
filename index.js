const app = require('./server')
const PORT = 8080

app.listen(PORT, () => {
  console.log(`Now listening on local host ${PORT}`)
})