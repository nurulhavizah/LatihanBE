const express = require('express');
const app = express();
const port = 7000;

app.get('/', function(req, res){
  res.send('Hello My name is VIZAH');
});

app.listen(port, function(){
  console.log('Hello my apps is running on port '+port);
});

app.post("/", function (req, res) {
  res.send("Hello My name is YOUR_NAME but it from post");
});

app.put("/", function (req, res) {
  res.send("Hello My name is YOUR_NAME but it from put");
});

app.patch("/", function (req, res) {
  res.send("Hello My name is YOUR_NAME but it from patch");
});
