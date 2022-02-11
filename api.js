"use strict";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;


app.use(cors({
  origin: "*",
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/checkout", (req, res) => {
  res.setHeader('Content-Type', 'application/json');
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
