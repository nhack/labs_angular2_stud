function callbackHell() {
  setTimeout(function() {
    console.log(0);
    setTimeout(function() {
      console.log(100);
      setTimeout(function() {
        console.log(200);
        setTimeout(function() {
          console.log(300);
          setTimeout(function() {
            console.log(400);
            setTimeout(function() {
              console.log(500);
              setTimeout(function() {
                console.log(600);
                setTimeout(function() {
                  console.log(700);
                  setTimeout(function() {
                    console.log(800);
                    setTimeout(function() {
                      console.log(900);
                      setTimeout(function() {
                        console.log(1000);
                      }, 1000);
                    }, 900);
                  }, 800);
                }, 700);
              }, 600);
            }, 500);
          }, 400);
        }, 300);
      }, 200);
    }, 100);
  }, 0);
};

function timeoutPromise(callback, delay) {
  var def = Q.defer();
  setTimeout(function() {
    callback();
    def.resolve()
  }, delay);
  return def.promise;
};

function createLogger(mess) {
  return function() {
    console.log(mess);
  }
}

function promisesHeaven() {
  timeoutPromise(createLogger(0), 0)
    .then(timeoutPromise(createLogger(100), 100))
    .then(timeoutPromise(createLogger(200), 200))
    .then(timeoutPromise(createLogger(300), 300))
    .then(timeoutPromise(createLogger(400), 400))
    .then(timeoutPromise(createLogger(500), 500))
    .then(timeoutPromise(createLogger(600), 600))
    .then(timeoutPromise(createLogger(700), 700))
    .then(timeoutPromise(createLogger(800), 800))
    .then(timeoutPromise(createLogger(900), 900))
    .then(timeoutPromise(createLogger(1000), 1000));
};

promisesHeaven();
