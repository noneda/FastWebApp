const pathUser = require('./Users');

const send = (app) => {
  app.use('/API/User', pathUser)
}

module.exports = send;
