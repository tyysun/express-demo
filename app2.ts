import express from 'express';

const app = express();

app.get('/', function (req, res) {
  res.send('hello would');
});

app.listen(3000, function () {
  console.log('监听3000端口');
});
