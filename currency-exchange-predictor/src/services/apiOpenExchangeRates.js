const app_id = 'a6e560adaf064de7814accbc1c6a934b';
const request = require('request');
const {formatDate} = require('../middlewares/validations/timeValidator');

// request api get rates:
const requestRates = (time = null) => {

    // default time is now:
    if (!time) time = formatDate(new Date());

    return new Promise((resolve, reject) => {
        request({
            url: `https://openexchangerates.org/api/historical/${time}.json?app_id=${app_id}`,
            json: true,
        }, (error, response, body) => {
            if (error) {
                reject('unable to connect to api server')
            } else if (response.statusCode != 200) {
                reject(response.statusMessage)
            } else {
                resolve(body.rates)
            }
        })
    })
}
// result ok is object: {USD: 1, NVD: 20, ...}
module.exports = requestRates;
