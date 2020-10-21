const express = require("express");
const cors = require('cors');
const app = express();
const port = 8080;

const rawData = require('./data/rawData');

const toInt = (value) =>{
    if(isNaN(value)){
        return parseFloat(value.replace(/,/g, ""));
    }
    return value;
}

const buildings = rawData.split('\n').map(r => {
    const dataArray = r.split(',');
    return {
        hash: toInt(dataArray[0]), 
        city: dataArray[1], 
        country: dataArray[2], 
        allBuildings: toInt(dataArray[3]), 
        100: toInt(dataArray[4]), 
        150: toInt(dataArray[5]), 
        200: toInt(dataArray[6]),
        300: toInt(dataArray[7]),
        telecomTowers: toInt(dataArray[8]),
        allStructures: toInt(dataArray[9])
    }
})

app.use(cors());

app.get('/', (req, res) => {
    console.log(`Order to return: ${req.query.order}`);
    switch(req.query.order){
        case "city":
            res.send(buildings.sort((a, b) => {return a.city>b.city?1:-1}));
        case "country":
            res.send(buildings.sort((a, b) => {return a.country>b.country?1:-1}));
        default:
            res.send(buildings);
    }
    
});

app.listen(port, ()=>{
    console.log('Running');
})