var express = require("express");
var app = express();

app.set("view engine", "pug");
app.set("views", "./views");


app.get("/first-template", function(req, res) {
	res.render("first-template");
});

app.get("/", function(req, res) {
	res.render("index");
});

app.get("/login", function(req, res) {
	res.render("login");
});

app.get("/auth/google", function(req, res) {
	res.send("Welcome to your dashboard");
});


app.listen(3000);

app.use(function(req, res, next) {
	res.status(404).send("Sorry, We fuc*ed up or you're asking for too much...");
});
