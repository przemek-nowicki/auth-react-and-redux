const app = require('./app');
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json('application/json'));

const server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});