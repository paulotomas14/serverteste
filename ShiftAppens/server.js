const http = require('http');
const mongo =require('mongodb');
const express=require('express');
const fs = require('fs');
const css =require('css');
const jsdom = require("jsdom");
const path=require("path");
const mongoose=require('mongoose');
const mocha = require('mocha');
const assert=require('assert');
const User=require('./models/users');
const net = require('net');
var count=0;




const app = express();

//ES6 Promises

mongoose.Promise = global.Promise;
console.log("BATEU");

const MongoClient = require(‘mongodb’).MongoClient;
const uri = ;
const index_file=path.join(__dirname,'index.html');
mongoose.connect('mongodb://paulo:lozalbwbmp14@db-klxwm.mongodb.net/test?retryWrites=true/shift',{useNewUrlParser:true});

mongoose.connection.once('open',function(){
  console.log("successfully connected to database");
}).on('error',function(error){
  console.log('Connection error:',error);
});

/*var pess=new User({name:'Pessoa'});
console.log(pess);
pess.save((err)=>{
  if(err) {
    console.log(err);
    return hadleError(err);
  }
  console.log("BATEU");
});*/








function create_user(u_name){
  User.create({name:u_name},(err,pess)=>{
    console.log(pess);
    if(err){
      console.log(err);
      return handleError(err);
  }
  });
}

var server = net.createServer(function(socket) {
	socket.write(count);
	socket.pipe(socket);
});
server.listen(1337, 'https://keystrokestestesecenas.netlify.com/');


app.use('/static',express.static('public'));

app.get('/',function(req,res){

  res.sendFile(path.join(__dirname,'index.html'));
  count++;

  create_user(String(count));


});
app.listen(80);



/*let jsdom=require('jsdom').JSDOM,
uri='public/index.html',
options={
  runScripts:'dangerously',
  resources:'usable'
};

jsdom.fromFile(uri,options).then(function(dom){
  let window =dom.window,
  document=window.document;
}).catch(function(e){
  console.log(e);

});*/
