var express = require('express')
var login = express()
var server = require('http').createServer(login)
var bodyParser = require('body-parser')
const fs = require('fs')
server.listen(3000,()=>{
    console.log('server is connected')
})

login.use(bodyParser.json())
login.use(bodyParser.urlencoded({ extended: false }))

login.post('/login',(req,res)=>{
    var authorize= false 
    var array = fs.readFileSync('credentials.txt').toString().split("\n");
    console.log(array)
    for(let i of array) {
       
      var tokens = i.split(",")
      //console.log(tokens)
      console.log(tokens[0].replace(/(\r\n|\n|\r)/gm, ""))
      console.log(tokens[1].replace(/(\r\n|\n|\r)/gm, ""))
      if(tokens[0].replace(/(\r\n|\n|\r)/gm, "") == req.body.username && tokens[1].replace(/(\r\n|\n|\r)/gm, "") == req.body.pass){
        console.log("hiii")
        authorize= true
        res.status(200).send('authorized')
      }
    }
    if (authorize==false){
      res.status(200).send('unauthorized')
    }
    
})
