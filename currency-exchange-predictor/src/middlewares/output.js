const requestRates = require('../services/apiOpenExchangeRates');
const { formatDate } = require('./validations/timeValidator');

const strOutput = (from, to, time, output) => {
    return `The predicted currency exchange from ${from} to ${to} for ${time} is ${output}`;
}

const getOutput = (from, to, unitOfFrom = 1, time = null) => {
    return new Promise((resolve, reject) => {
        // default time is now:
        if (!time) time = formatDate(new Date());

        // request api:
        requestRates(time)
            .then(rates => {
                // calculate:
                const valueOfFromCurrency = rates[from]
                const valueOfToCurrency = rates[to]
                const output = unitOfFrom * valueOfToCurrency / valueOfFromCurrency

                // result is string:
                resolve(strOutput(from, to, time, output))
            })
            .catch(error => {
                reject(error)
            })
    })
}

module.exports = getOutput