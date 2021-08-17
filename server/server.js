const express = require('express')
require('dotenv').config()

const {PORT} = process.env

const App = express()

App.get('/rest', (req, res) => {
    res.json({
        data : 'Hello'
    })
})

