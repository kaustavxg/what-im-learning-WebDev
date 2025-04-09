function takeOrder(callback) {
    setTimeout(() => {
      console.log("Order taken");
      callback();
    }, 2000);
  }
  
  function makeCoffee(callback) {
    // delay and log
    // then callback()
  }
  
  function serveCoffee() {
    // delay and log "Coffee Served! Enjoy ☕"
  }
  
  // Start the process
  takeOrder(() => {
    makeCoffee(() => {
      serveCoffee();
    });
  });
  