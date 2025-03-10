const express = require('express');
const app = express();


app.get("/", (req, res) => {
	console.log("GET Request Successfull!");
	res.send("Get Req Successfully initiated");
})

// Puerto de escucha //
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function() {
    console.log('escuchando puerto: ', app.get('puerto'));
});