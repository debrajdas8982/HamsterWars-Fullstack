const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

const hamsters = require('./routes/hamsters')
const matches = require('./routes/matches')
// const matchWinner = require('./routes/matchWinner')
// const winner = require('./routes/winner')
// const loser = require('./routes/loser')

const PORT = process.env.PORT || 2000
const buildFolder = path.join(__dirname, "../build");
const imageFolder = path.join(__dirname, "./img");

const getDatabase = require("./database.js");
const db = getDatabase();


app.use((req, res, next) => {
	console.log(`${req.method} ${req.url}`, req.params);
	next()
})

app.use( express.json() )
app.use( cors() )
app.use( express.static(buildFolder));
app.use("./img", express.static(imageFolder));

// REST API

app.use("/hamsters", hamsters);
app.use("/matches", matches);
// app.use('/matchWinner', matchWinner);
// app.use('/winner', winner);
// app.use('/loser',loser);

app.get('*',(req,res)=>{
	res.sendFile(path.join(__dirname, "../build/index.html"))
})


app.listen(PORT, () => {
	console.log("Server listening on port " + PORT);
})
