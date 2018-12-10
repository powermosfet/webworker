onmessage = function(msg) {
  var x = Number(new Date()) + 5000;
  
  console.log("Worker received message #" + msg.data);
  
  while(x > new Date() && msg.data.keepRunning()) {
  }
  
  console.log("Worker is done processing message #" + msg.data + "! posting message to main thread");
  postMessage("Done!");
}
