const { argv } = require('./services/yargs');
const validator = require('./middlewares/validations/validator');
const getOutput = require('./middlewares/output');

// validator input:
const { error, from, to } = validator(argv);

// error input:
if (error) {
    return console.log(error)
}

// good to go:
console.log(`from: ${from}, to: ${to}`)
getOutput(from, to)
    .then(strOutput => console.log(strOutput))
    .catch(error => console.log('unable to get rate .', error))
console.log('loading...')



