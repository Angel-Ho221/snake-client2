const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50541,
  
    
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on("data", function(message){
    //do smthing when i receive the data
    console.log(message);

})
  return conn;
}

module.exports = { connect }