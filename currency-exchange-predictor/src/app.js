const actionWithInput = require('./actionWithInput');
const argv = require('./yargs');
const requestRates = require('./apiOpenExchangeRates');

// validator input:
const input = actionWithInput(argv);
const { error, from, to } = input;
if(error){
    console.log(error)
}else{
    console.log(`from: ${from}, to: ${to}`)
    // convert(from, to);
    requestRates()
}


