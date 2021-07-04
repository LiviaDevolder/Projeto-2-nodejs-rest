const express = require('express')
const app = express()
const config = require('config')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(config.get('api.porta'), () => console.log('A API está funcionando!'))