const yargs = require('yargs');
const validator = require('./validator');

const command = yargs.argv;

// validator input:
const input = validator(command);
if(input){
    const {from, to} = input;
    console.log(`from: ${from}, to: ${to}`)
}
