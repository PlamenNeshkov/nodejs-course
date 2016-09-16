var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('views', 'src/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', {title: "Sample App", list: ['a', 'b']});
});

app.get('/books', function(req, res) {
  res.send('Hello books');
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  }
  console.log('Running server on port ' + port);
});
