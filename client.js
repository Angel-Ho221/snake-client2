const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,

  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on("connect", function () {
    conn.write("Name: AH");
  });

  conn.on("connect", function (connect) {
    console.log("Successfully connected to game server!");
  });

  conn.on("data", function (message) {
    //do smthing when i receive the data
    console.log(message);
  })

  // conn.on('connect', () => {
  //   conn.write("Move: up")
  //   setTimeout(() => {
  //     process.stdout.write(conn.write("Move: left"))
  //   }, 100);
  //   setTimeout(() => {
  //     process.stdout.write(conn.write("Move: up"))
  //   }, 200);
  //   setTimeout(() => {
  //     process.stdout.write(conn.write("Move: right"))
  //   }, 300);
  //   setInterval(() => {
  //     process.stdout.write(conn.write("Move: left"))
  //   }, 200);
  //   setTimeout(() => {
  //     process.stdout.write(conn.write("Move: down"))
  //   }, 400);
  // })

  return conn;
}

module.exports = { connect }