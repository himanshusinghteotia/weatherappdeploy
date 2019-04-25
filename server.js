/**
 * Author: Himanshu Singh Teotia
 */
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const path = require('path')

app.use(express.json())
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))

app.use('/',express.static(path.join(__dirname, '/public')))

//port number to listen
const PORT=process.env.PORT || 4200
app.listen(PORT, () => console.log('Server started at ${PORT}'))