const path = require("path");
const express = require("express");


console.log(__dirname);

//Define paths for Express Config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewSPath = path.join(__dirname, '../templates');

const app = express();

//Setup handlebars engine and views locatio
app.set('view engine','hbs');
app.set('views', viewSPath);

//Setup Static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
	res.render("index", {
		title : "Weather Application",
		name : "Raunaq Ramesh Porwal"
	});
});

app.get('/help', (req, res) => {
	res.render("help", {
		title: "Help Page Dynamic",
		message : "Message from HBS of Node"
	});
});

// app.get('/about', (req, res) => {
	// res.send("<h1>About Page</h1>!");
// });

app.get('/weather', (req, res) => {
	res.send({
		forecast : "Its 21 C",
	Location : "Mumbai, Maharashtra, India"
	});
});

app.listen(3000, () => {
	console.log("Connected to the server and port 3000");
});