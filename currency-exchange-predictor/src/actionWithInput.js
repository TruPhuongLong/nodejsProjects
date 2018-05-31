
// validator format of currency: it can be in range of rates
function _formatValidator(from, to, currencies) {
    const currencyKeys = Object.keys(currencies)
    if (currencyKeys.indexOf(from) === -1 || currencyKeys.indexOf(to) === -1) {
        const errorValueFormat = 'currency invalid. use node exchangePredict --help to get currencyTemplate'
        return { error: errorValueFormat }
    }
    return {error: null}
}

//===================================================Main====================================
const { currencies } = require('./exchangeRateDataTemplate');

const actionWithInput = (argv) => {
    let {from, to} = argv
    from = String(from).toUpperCase();
    to = String(to).toUpperCase();

    //value format invalid
    const {error} = _formatValidator(from, to, currencies);
    if(error) return {error};

    return { from, to }
}

module.exports = actionWithInput;