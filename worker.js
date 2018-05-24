onmessage = function(message) {
  var x = Number(new Date()) + 10000;
  
  while(x > new Date()) {
  }
  
  postMessage("Done!");
}
