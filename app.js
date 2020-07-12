const express = require('express')
const app = express()

app.get('/', function (req, res) {
	res.send('你好')
})

app.listen(3000,function () {
	console.log('监听3000端口')
})
