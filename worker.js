onmessage = function(msg) {
  var x = Number(new Date()) + 10000;
  
  console.log("Worker received message with count " + msg.data);
  
  while(x > new Date()) {
  }
  
  console.log("Worker is done! posting message to main thread");
  postMessage("Done!");
}
