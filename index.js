const express = require("express");
const app = express();
const port = process.env.port || 3000;

app.get("/", (req, res) => {
	res.send("Welcome to home");
});

app.get("/users", (req, res) => {
	fetch("https://jsonplaceholder.typicode.com/users")
		.then((response) => response.json())
		.then((json) => res.send(json));
});

app.listen(port, () => {
	console.log(`server running at port ${port}`);
});
