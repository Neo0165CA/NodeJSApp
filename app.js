// Create REST API with express and node.js

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

//parse application/x/www-form-urlencoded
app.use(bodyParser.urlencoded({extended : false}));

//parse application/json
app.use(bodyParser.json());


const http = require("http");
const server = http.createServer(app);
// REST Api Urls

// People > /people
// Person in People > /people/person
// People/Person/Age > /people/person/age

let people =  {people : [{ name : "Pravin"}] }

app.get('/people', function(req, res){
    res.json(people);
    res.end();
}) // req - what information sent from client side to server side and  res - what information sent form server side to client side


app.post('/people', function(req, res){
    if(req.body && req.body.name){
        people.people.push({ name : req.body.name })
    }
    res.json(people);
    res.end();
    console.log(req.body);
})

app.post('/people', function(req, res){
    if(req.body && req.body.name){
        people.people.push({ name : req.body.name })
    }
    res.json(people);
    res.end();
    console.log(req.body);
})


app.post('/people', function(req, res){
    if(req.body && req.body.name){
        people.people.push({ name : req.body.name })
    }
    res.json(people);
    res.end();
    console.log(req.body);
})



app.get('/people/:name', function(req, res){
    res.json({name : req.params.name});
    res.end();
})

server.listen(3001, function(){
    console.log("Server is listening on port :3001")
});





// Read Json file with route

// var http = require("http");
// var server = http.createServer(app);

// var fs = require('fs');
// const { json } = require("body-parser");


// app.get('/', function(req, res){
//     res.send("<h1>express work</h1>")
// });


// app.get('/tasks', function(req, res){
//     fs.readFile('./db.json', function(err, data){
//         var tasks  = JSON.parse(data.toString()).tasks;
//         res.json(tasks);
//     })
// });

// server.listen(3001, function(){
//     console.log("Server is listening on port :3000")
// });





// Create a Server and events emitter

// var http = require("http");
// var events = require("events");
// var eventsEmitter = new events.EventEmitter();
// var server = http.createServer(function(req, res){
//     eventsEmitter.emit("someone request"); // event emitter or Trigger like click, change, etc.
//     res.end("Server Works !!");

// });

// eventsEmitter.on("someone request", function(){
//     console.log("events has been handle by server");
// }) //event listener



// server.listen(3000, 'localhost', function(){
//     console.log("Server started on port : 3000")
// })