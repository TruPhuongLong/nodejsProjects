const currencyValidator = require('./currencyValidator');
const { currencies } = require('../../assets/exchangeRateDataTemplate');
const { timeValidator, formatDate } = require('./timeValidator');

const validator = (argv) => {
    let { from, to, value, time } = argv
    from = from.toUpperCase();
    to = to.toUpperCase();

    //currency validator
    const resultCurVal = currencyValidator(from, to, currencies);
    if (resultCurVal.error) return resultCurVal;

    //value validator : if value != number -> yargs validator return NaN, so not need validator.

    // time validator:
    let resultTiVal = timeValidator(time)
    if(resultTiVal.error) return resultTiVal;

    // good to go:
    time = formatDate(new Date(time));
    return { from, to, value, time }
}

module.exports = validator;