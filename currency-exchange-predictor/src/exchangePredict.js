const yargs = require('yargs');
const validator = require('./validator');

const command = yargs.argv;

// validator input:
const input = validator(command);
const { error, from, to } = input;
if(error){
    console.log(error)
}else{
    console.log(`from: ${from}, to: ${to}`)
}

