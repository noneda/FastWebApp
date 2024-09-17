const routes = require('./routers')

const express = require('express')
const cors = require('cors')

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',  
  credentials: true
}));


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
