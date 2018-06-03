const yargs = require('yargs');
const { currencies } = require('../assets/exchangeRateDataTemplate'); 

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
        'list Format Currency': {
            describe: JSON.stringify(currencies),
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

module.exports = {argv};