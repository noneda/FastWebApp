const app = require('./app')

const {getConfig} = require('./config');

const conf = getConfig()

const port = conf.connection.PORT;

app.listen(
    port,
    () => {
        console.log(`Server online, http://localhost:${port}`)
    }
)
