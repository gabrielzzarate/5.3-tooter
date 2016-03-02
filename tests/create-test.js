var expect = chai.expect;
var $ = require('jquery');

describe('create post form', function(){
  it('should trigger a create:post event on the document with the title and body'), function(){

    $(document).on('create: post', function(event, data){
      expect(data).to.have.property('title');
      expect(data).to.have.property('body');

    }.done());

  });
});
