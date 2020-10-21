const express = require("express");
const cors = require('cors');
const app = express();
const port = 8080;

const buildings = [
    {hash: 2, city: "New Work", Country: "USA", 
    allBuildings: 100, 100: 1234, 150: 1234, 200: 1521,300: 124,telecomTowers: 1234,allStructures:12347},
    {hash: 1, city: "London", Country: "UK", 
    allBuildings: 160, 100: 1934, 150: 12234, 200: 1521, 300: 2124,telecomTowers: 13234,allStructures:1237},
];

app.use(cors());

app.get('/', (req, res) => {
    console.log(`Order to return: ${req.query.order}`);
    res.send(buildings);
});

app.listen(port, ()=>{
    console.log('Running');
})