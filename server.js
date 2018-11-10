var http = require('http');
var fs = require('fs');
var url = require('url');
var express = require('express');
var app = express();

//serve all static pages.
app.use(express.static('./'));

//load thefoodie.html as the main page.
app.get("/", function(req,res){

	res.sendFile(__dirname + "/FavoritePod.html");
});

app.listen(8080);
