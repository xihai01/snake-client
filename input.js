//stores the active TCP connection object
let connection;

const handleUserInput = function(key) {
  //terminate our program by checking for ctrl + c
  if (key === '\u0003') {
    process.exit();
  }
  //bind the WASD key presses to correspond to up, down, left, right
    if (key === 'w') {
        connection.write('Move: up');
    } else if (key === 'a') {
        connection.write('Move: left');
    } else if (key === 's') {
        connection.write('Move: down');
    } else if (key === 'd') {
        connection.write('Move: right');
    }
    
    //send a message if key 1 is pressed
    if (key === 'q') {
      connection.write('Say: uWuOwOuWu!');
    }
};

//setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

//export function
module.exports = { setupInput };