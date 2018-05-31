const app_id = 'a6e560adaf064de7814accbc1c6a934b';
const request = require('request');

const convert = (from, to, fromValue = 1) => {
    return new Promise((resolve, reject) => {
        request({
            url: `https://openexchangerates.org/api/convert/${fromValue}/${from}/${to}?app_id=${app_id}`,
            json: true,
        }, (error, response) => {
            if (!error) {
                console.log(response)
            }
        })
    })
}

module.exports = convert;
