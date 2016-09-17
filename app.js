var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
var nav = [{
  link: '/books',
  text: 'Books'
}, {
  link: '/authors',
  text: 'Authors'
}];

var bookRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')();

app.use(express.static('public'));
app.set('views', 'src/views');
app.set('view engine', 'ejs');

app.use('/books', bookRouter);
app.use('/admin', adminRouter);

app.get('/', function(req, res) {
  res.render('index', {
    title: "Sample App",
    nav: [{
      link: '/books',
      text: 'Books'
    }, {
      link: '/authors',
      text: 'Authors'
    }]
  });
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  }
  console.log('Running server on port ' + port);
});
