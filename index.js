const express = require('express');
// const path = require("path");
const app = express();
app.use(express.static('html'))

app.use (
    express.urlencoded({
        extended: true,
    }),
);
const port = process.env.PORT || 3000;


app.use(express.json());

app.get('/index.html', (req, res) => {
    console.log(req)
    
    // mostrar req 
    res.sendFile(__dirname + "/public/index.html")
    // res.json({message: 'Oi express!'})
})

app.get('/', (req, res) => {
    console.log(req)
    
    // mostrar req 
    res.json({message: 'Oi express!'})
})


app.listen(3000);
