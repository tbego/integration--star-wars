document.addEventListener('DOMContentLoaded', function() {
  // do your setup here
  console.log('Initialized app');
});


var mod = require('./js/modules/mod');
var header = require('./js/modules/header');


mod.init();
header.init();
