const yargs = require('yargs');
const { currencies } = require('./exchangeRateDataTemplate'); 

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
            describe: JSON.stringify(Object.keys(currencies))
        }
    })
    .help()
    .argv;

module.exports = argv;