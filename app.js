var express = require('express')
var app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/',function(req,res,next){
    res.render('index');
});//home page*/

// Botstrap files
app.use('/css', express.static( __dirname + '/node_modules/bootstrap/dist/css/'));
app.use('/fonts', express.static( __dirname + '/node_modules/bootstrap/dist/fonts/'));
app.use('/js', express.static( __dirname + '/node_modules/bootstrap/dist/js/'));

// jQuery
app.use('/js', express.static( __dirname + '/node_modules/jquery/dist/'));

//Other Static Resourses
app.use('/css', express.static( __dirname + '/public/css/'));
app.use('/js', express.static( __dirname + '/public/js/'));
// --- images ---
app.use('/images', express.static( __dirname + '/public/images/'));
app.use('/images', express.static( __dirname + '/public/images/covers/'));


var server = app.listen(3000, function(){
    console.log('Listen on port ' + this.address().port + '...');
});//create and start server then listen port 3000