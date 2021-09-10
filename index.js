const express = require("express");
const app = express();
const port = process.env.port || 3000;

app.get("/", (req, res) => {
	res.send("Welcome to home");
});

app.listen(port, () => {
	console.log(`server running at port ${port}`);
});
