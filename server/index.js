const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')

// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./api'))

// static file-serving middleware
app.use(express.static(path.join(__dirname, '../public')))

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

// app.use((err, req, res, next) => {
//   const err = new Error('Not found.');
//   err.status = 404;
//   next(err);
// });

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});


module.exports = app