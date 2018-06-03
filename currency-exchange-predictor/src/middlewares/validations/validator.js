const currencyValidator = require('./currencyValidator');
const { currencies } = require('../../assets/exchangeRateDataTemplate');

const validator = (argv) => {
    let {from, to} = argv
    from = from.toUpperCase();
    to = to.toUpperCase();

    //currency validator
    const {error} = currencyValidator(from, to, currencies);
    if(error) return {error};

    return { from, to }
}

module.exports = validator;