const app_id = 'a6e560adaf064de7814accbc1c6a934b';
const request = require('request');

// get current time: with format: yyyy-MM-dd
function now() {
    const time = new Date();
    const year = time.getFullYear();
    let month = time.getMonth() + 1; // getMonth() return range: 0-11 -> need + 1 -> 1 -12
    month = month >= 10 ? month : `0${month}`; 
    const date = time.getDate() >= 10 ? time.getDate() : `0${time.getDate()}`

    return `${year}-${month}-${date}`
}

// request api get rates:
const requestRates = (time = null) => {

    // default time is now:
    if (!time) time = now();

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

module.exports = requestRates;
