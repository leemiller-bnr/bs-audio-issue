const express = require('express')
const app = express()
const path = require('path')

app.use('/', express.static(path.join(__dirname, './client/index.html')))
app.use('/click.wav', express.static(path.join(__dirname, './assets/click.wav')))
app.use(express.static(path.join(__dirname, './client')))

app.listen(1234, ()=> {
    console.log('Server started on 1234')
})
