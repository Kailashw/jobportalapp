const express = require("express");
const app = express();
const PORT = 8000;
const data = require('./data/data.json');
const cors = require('cors');

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.get("/", (req, res) => {
    res.send("Welcome to goodera job serach portal api");
});

app.get("/jobs", (req, res) => {
    let response = []
    if(Object.keys(req.query).length){
        Object.keys(req.query).forEach(query => {
            let searchterm = req.query[query].toLowerCase().trim();
            data.forEach(el => {
                if(el[query].toLowerCase().trim().indexOf(searchterm) > -1){
                    response.push(el);
                }
            } )
        })
        res.send(response);
    }else{
        res.send(data);
    }
    
});

app.get("/jobs/:id", (req, res) => {
    res.send(data.find(el=> el.id=== Number(req.params.id)));
});

app.listen(PORT, () => {
  console.log(`server starter at http://localhost:${PORT}`);
});
