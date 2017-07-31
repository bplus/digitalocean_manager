var privkey = require('./privkey.secret').privkey;
var digitalocean = require('digitalocean');
var client = digitalocean.client(privkey);

client.droplets.list().then(function(droplets) {
  
  for(var droplet of droplets) {
    console.log("Starting snapshot of " + droplet.name + "...");
    client.droplets.snapshot(droplet.id);
  }
 
}).then(function() {
  
  console.log("All droplets have started a new snapshot.");

}).catch(function(err) {
  
  console.log('sadface, error: ' + err);  

});



