const currencyValidator = require('./currencyValidator');
const { currencies } = require('../../assets/exchangeRateDataTemplate');
const { timeValidator, formatDate } = require('./timeValidator');

const validator = (argv) => {
    let { from, to, value, time } = argv
    from = from.toUpperCase();
    to = to.toUpperCase();

    //currency validator
    var {error} = currencyValidator(from, to, currencies);
    if (error) return {error};

    //value validator : if value != number -> yargs validator return NaN
    if(!value) return {error: 'value must be a number'}

    // time validator:
    var {error} = timeValidator(time)
    if(error) return {error};

    // good to go:
    time = formatDate(new Date(time));
    return { from, to, value, time }
}

module.exports = validator;