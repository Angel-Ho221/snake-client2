let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  let currentInterval;
  const interval = 50
  const handleUserInput = function (key) {
    process.stdout.write('.');

    if (key === "m") {
      connection.write("Say: let's keep this PG...")

    }
    if (key === '\u0003') {
      console.log("exiting program");
      process.exit();

    } if (key === "w") {
      clearInterval(currentInterval);
      currentInterval = setInterval(() => {
        process.stdout.write(connection.write("Move: up"))
      }, interval);
    } else if (key === "a") {
      clearInterval(currentInterval);
      currentInterval = setInterval(() => {
        process.stdout.write(connection.write("Move: left"))
      }, interval);
    } else if (key === "s") {
      clearInterval(currentInterval);
      currentInterval = setInterval(() => {
        process.stdout.write(connection.write("Move: down"))
      }, interval);
    } else if (key === "d") {
      clearInterval(currentInterval);
      currentInterval = setInterval(() => {
        process.stdout.write(connection.write("Move: right"))
      }, interval);
    };
  };
  stdin.on('data', handleUserInput);

  return stdin;
};

module.exports = { setupInput }
