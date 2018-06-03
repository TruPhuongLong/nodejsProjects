module.exports = function currencyValidator(from, to, currencies) {
    const currencyKeys = Object.keys(currencies)
    if (currencyKeys.indexOf(from) === -1 || currencyKeys.indexOf(to) === -1) {
        const errorValueFormat = 'currency invalid. use node exchangePredict --help or -h to get currencyTemplate'
        return { error: errorValueFormat }
    }
    return {error: null}
}