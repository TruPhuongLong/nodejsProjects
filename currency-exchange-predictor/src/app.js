// control with yargs:
const { argv } = require('./services/yargs');

const validator = require('./middlewares/validations/validator');
const getOutput = require('./middlewares/output');

// validator input:
let { error, from, to, value, time } = validator(argv);

// error input:
if (error) {
    return console.log(error)
}

// good to go:
value = value ? value : 1
console.log(`from: ${value} ${from}, to: ${to}`)
getOutput(from, to, value, time)
    .then(strOutput => console.log(strOutput))
    .catch(error => console.log('unable to get rate .', error))
console.log('loading...')



