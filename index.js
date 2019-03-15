const express = require('express')
const passportConfig = require('./services/passport')

const app = express()

const port = process.env.PORT || 3000

require('./routes/authRoutes')(app)

app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port)
})