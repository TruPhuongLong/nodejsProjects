const requestRates = require('../services/apiOpenExchangeRates');
const { formatDate } = require('./validations/timeValidator');

const strOutput = (from, to, valueInput, time, output) => {
    return `The predicted currency exchange from ${valueInput} ${from} to ${to} for ${time} is ${output}`;
}

const getOutput = (from, to, valueInput = 1, time = null) => {
    return new Promise((resolve, reject) => {
        // default time is now:
        if (!time) time = formatDate(new Date());

        // request api:
        requestRates(time)
            .then(rates => {
                // calculate:
                const valueOfFromCurrency = rates[from]
                const valueOfToCurrency = rates[to]
                let output = valueInput * valueOfToCurrency / valueOfFromCurrency

                // if output is NaN: this time the country is not avalable to rate:
                if(!output) output = output + '\n----\nAt this time, this currency not availabel to rate'

                // result is string:
                resolve(strOutput(from, to, valueInput, time, output))
            })
            .catch(error => {
                reject(error)
            })
    })
}

module.exports = getOutput