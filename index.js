//Install express server
const port = '8800';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.set('views', __dirname + '/dist/mini-project'); // Set views (index.html) to root directory
app.use(express.static(__dirname + '/dist/mini-project'));


app.use(bodyParser.json({
    limit: '100mb'
}));

app.use(bodyParser.urlencoded({
    limit: '100mb',
    extended: true
}));


app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/mini-project/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(port);
console.log('app listing ', port);