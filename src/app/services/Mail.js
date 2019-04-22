// const fs = require('fs')
// const hbs = require('handlebars')
const nodemailer = require('nodemailer')
const path = require('path')
const hbs = require('nodemailer-express-handlebars')
const exphbs = require('express-handlebars')
const mailConfig = require('../../config/mail')

const transport = nodemailer.createTransport(mailConfig)

var options = {
  viewEngine: {
    extname: '.hbs',
    layoutsDir: '../views/emails/',
    defaultLayout: 'template',
    partialsDir: '../views/emails/'
  },
  viewPath: '../views/emails/',
  extName: '.hbs'
}

transport.use(
  'compile',
  hbs(options)
  //   {
  //   viewEngine: exphbs(),
  //   viewPath: path.resolve(__dirname, '..', 'views', 'emails'),
  //   extName: '.hbs'
  // })
)

module.exports = transport
