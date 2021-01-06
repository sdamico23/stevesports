//switch it from session to token
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var connection = require('./database');
var path = require('path');
//fix below?? 
var app = require("/app.js")
var UserModel = require('./models');

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
//use parser to turn data into other data 
//.use to use middleware
//parse url into json
//use functions go in order
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + 'nodelogin'));
// ///display login page when user connects 
// app.get('/', function(request, response) {
// 	response.sendFile(path.join(__dirname + '/register.html'));

// });
//check if username and password match
app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});
//redirect to home page 
app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});
//signing up 
app.post('/signup', function(request, response) {
	var userModel = new UserModel(request.body.firstName, request.body.lastName,request.body.email,request.body.username,request.body.password. request.body.passwordConfirm);
	if (UserModel.password != UserModel.passwordConfirm) throw "passwords do not match! Please try again.";
	if (UserModel.username && UserModel.password && UserModel.email && UserModel.last && UserModel.first) {
		var sql = "INSERT INTO accounts (firstname, lastname, email, username, password) VALUES ?";
		var values = [ UserModel.first, UserModel.last, UserModel.email, UserModel.username, UserModel.password];  
		connection.query(sql, [values], function(error, results, fields) {
			if (error) throw error;
			if (results.affectedRows > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/home');
			} else {
				response.send('Registration failed, please try again');
			}			
			response.end();
		});
	} else {
		response.send('Please fill out every field');
		response.end();
	}
});
