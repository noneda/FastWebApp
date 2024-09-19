const routes = require('./Routers')

const express = require('express')
const cors = require('cors')

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "Fast Docs",
    author: "noneda",
    version: "0.0.1",
    description: "IDK",
  });
});

routes(app);

module.exports = app;
