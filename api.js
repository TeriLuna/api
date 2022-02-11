"use strict";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const port = 3000;

let rawdata = fs.readFileSync("subscriptions.json");
let subscriptions = JSON.parse(rawdata) || [];

app.use(cors({
  origin: "*",
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/checkout", (req, res) => {
  // subscriptions.push(req.body.email);
  // fs.writeFileSync("subscriptions.json", JSON.stringify(subscriptions));
  res.setHeader('Content-Type', 'application/json');
  // res.end(JSON.stringify({ a: 1 }));
  const user = {name: "", lastName: "", total: req.body.total}
  console.log(req.body);
  req.body.places.forEach(element => {
    if(element.label === 'Nombre'){
      user.name = element.value
    }
    if(element.label === 'Apellidos'){
      user.lastName = element.value
    }
  });
  res.end(JSON.stringify({status: "ok", user: user, req: req.body}));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
