const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Turn off the motor');

        setTimeout(()=>{
        console.log("Turn it off, REMINDER!!");
        },3000)
});


console.log("Code is running fine");
myEmitter.emit('WaterFull');
console.log("Code is still running fine");


