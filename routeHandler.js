var express = require('express'),
	path = require('path'),
	router = express.Router()


router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/views/index.html'))
})

router.post('/', (req,res) => {
	res.send(req.body.picture)
})

module.exports = router