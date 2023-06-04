const express = require("express");
const bodyParser = require('body-parser');
const {randomBytes} =require('crypto');

const app =  express();
app.use(bodyParser.json());

/* initial project phase we keep posts in memory (array) */ 
const posts = {};

app.get('/posts',(req,res)=>{
    res.send(posts);
});

app.post('/posts',(req,res)=>{
    const id = randomBytes(4).toString('hex');
    const{title} = req.body;
    posts[id]= {
       id,title     
    };
    res.status(201).send(posts[id]);
});
// port number :  4000 
app.listen(4000,()=>{
    console.log("started listening on port 4000");
});