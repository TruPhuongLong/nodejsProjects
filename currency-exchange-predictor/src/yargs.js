const yargs = require('yargs');
const { currencies } = require('./exchangeRateDataTemplate'); 


const argv = yargs
    .option({
        f: {
            demand: true,
            alias: 'from',
            describe: 'currency source',
            string: true,
        },
        t: {
            demand: true,
            alias: 'to',
            describe: 'currency target',
            string: true,
        },
        c: {
            alias: 'currencies',
            describe: JSON.stringify(currencies),
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

module.exports = argv;