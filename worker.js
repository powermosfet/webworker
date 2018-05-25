onmessage = function(msg) {
  var x = Number(new Date()) + 3000;
  
  console.log("Worker received message #" + msg.data);
  
  while(x > new Date()) {
  }
  
  console.log("Worker is done processing message #" + msg.data + "! posting message to main thread");
  postMessage("Done!");
}

window.onkeypress = function(e) {
  postMessage("Key pressed: " + e.which);
}
