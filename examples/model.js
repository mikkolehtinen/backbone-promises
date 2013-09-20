var Model = require('../').Model;
var Db = require('backbone-db');

var MyModel = Model.extend({
  db:Db("mymodel"),
  sync:Db.sync,
  url: function() {
    if(this.isNew()) {
      return '/mymodels';
    } else {
      return '/mymodels/'+this.get(this.idAttribute);
    }
  }
});

var a = new MyModel({id:1,abc:1});
a.save().then(function() {

  var b = new MyModel({id:1});
  b.fetch().then(function() {
    console.log (a.get('abc') == b.get('abc'))
  });
}, function(err) {
  console.error(err);
});