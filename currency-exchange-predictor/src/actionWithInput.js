
// validator format of currency: it can be in range of rates
function _formatValidator(from, to, rates) {
    const currencies = Object.keys(rates)
    if (currencies.indexOf(from) === -1 || currencies.indexOf(to) === -1) {
        const errorValueFormat = 'currency invalid. use node exchangePredict --help to get currencyTemplate'
        return { error: errorValueFormat }
    }
    return {error: null}
}

//===================================================Main====================================
const { rates } = require('./exchangeRateDataTemplate');

const actionWithInput = (argv) => {
    let {from, to} = argv
    from = String(from).toUpperCase();
    to = String(to).toUpperCase();

    //value format invalid
    const {error} = _formatValidator(from, to, rates);
    if(error) return {error};

    return { from, to }
}

module.exports = actionWithInput;