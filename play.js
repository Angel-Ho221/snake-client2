const { connect } = require('./client');

console.log('Connecting ...');
connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = function (data) {
    if (key === '\u0003') {
      console.log("exiting program")
      process.exit();

    }
  }
  return stdin;
}