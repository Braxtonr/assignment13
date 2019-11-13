const express = require("express");
const app = express();
const teams = require('./teams');
//allows us to use access js/css/images if in a public directory
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html")
});

app.get('/api/teams',(req,res)=>{
    res.send(teams);
})

const port = 3000;

app.listen(port, ()=>{
        console.log(`listen on port ${port}`);
});