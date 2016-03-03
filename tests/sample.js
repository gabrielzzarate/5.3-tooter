var chai = require('chai');
var expect = chai.expect;

var hello = require('../app/scripts/index').hello;

describe('hello', function(){
  it('should say hello', function(){
    expect(hello()).to.be.equal('hello world');
  });
});


describe('create post form', function(){
  it('should trigger a create:post event on the document with the title and body'), function(){

    $(document).on('create: post', function(event, data){
      expect(data).to.have.property('title');
      expect(data).to.have.property('body');

    });

  };
  
});
