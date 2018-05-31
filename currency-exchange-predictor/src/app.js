const yargs = require('yargs');
const actionWithInput = require('./actionWithInput');
const { rates } = require('./exchangeRateDataTemplate'); 

const argv = yargs
    .command('exchangePredict', 'exchange currency predict', {
        from: {
            describe: 'currency source',
            demand: true,
            alias: 'f'
        },
        to: {
            describe: 'currency target',
            demand: true,
            alias: 't'
        },
        rateTemplate: {
            describe: JSON.stringify(Object.keys(rates))
        }
    })
    .help()
    .argv;


// validator input:
const input = actionWithInput(argv);
const { error, from, to } = input;
if(error){
    console.log(error)
}else{
    console.log(`from: ${from}, to: ${to}`)
}

