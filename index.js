const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.port || 3000;

app.get("/", (req, res) => {
	res.send("Welcome to home");
});

app.get("/users", (req, res) => {
	axios
		.get("https://jsonplaceholder.typicode.com/users")
		.then(function (response) {
			res.send(response.data);
		})
		.catch(function (error) {
			res.send(error);
		});
});

app.listen(port, () => {
	console.log(`server running at port ${port}`);
});
