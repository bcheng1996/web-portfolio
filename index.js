var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var _ = require('underscore');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use('/public', express.static('public'));
app.use(express.static(path.join(__dirname, 'node_modules')));

/* Similar to the pokemon project, we are loading in the data to the
 * _DATA object. Luckily, we will never actually have to save new data
 * to a file. */

app.get('/', function(req, res) {
  /* For this endpoint, all you have to do is return the states, and
   * whatever information is necessary to link them to their own
   * /state/:statename endpoint. */
  res.render('home', {});
})


app.listen(process.env.PORT || 3000, function() {
  console.log("port listening");
});
