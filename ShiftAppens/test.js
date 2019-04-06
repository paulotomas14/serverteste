const mocha = require('mocha');
const mongoose=require('mongoose');
const assert=require('assert');
const User=require('./models/users');



describe('Saving records',()=>{
  //create all our tests
  it('Saves records to database correctly',function(done){
    const cb = (err,us)=>{
      console.log(err)
      done()
    }

    User.create({
      name:'Mario',
      id:12
    }, cb);

  });
});
