const app = require('./server/api')
const PORT = 3000

app.listen(PORT, () => {
  console.log(`Now listening on local host ${PORT}`)
})