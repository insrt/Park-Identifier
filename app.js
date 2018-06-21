var express = require('express'),
	http = require('http'),
	path = require('path'),
	bodyParser = require('body-parser'),
	router = require('./routeHandler.js'),
	port = Number(process.env.PORT || 8888)

var app = express()

app.set('views', path.join(__dirname, "/views"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
// app.use(express.static(path.join(__dirname), '/public'))

app.use('/', router)

app.listen(port, function() {
	console.log('Server started on port ' + port)
})


module.exports = app
