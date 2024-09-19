const pathUser = require('./Users');
const pathLog = require('./Login')

const send = (app) => {
  app.use('/API/User', pathUser),
  app.use('/API/Login', pathLog)
}

module.exports = send;
