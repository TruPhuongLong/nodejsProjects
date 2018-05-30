const {rates} = require('./exchangeRateDataTemplate');

const validator = (command) => {
    let {from, to} = command;

    // command invalid
    if(!from || !to){
        const errorCommand = 'command invalid. use: node exchangePredict --from "value" --to "value"'
        return {error: errorCommand}
    }

    //value format invalid
    const keys = Object.keys(rates)
    from = String(from).toUpperCase();
    to = String(to).toUpperCase();
    
    if(keys.indexOf(from) === -1 || keys.indexOf(to) === -1){
        const errorValueFormat = 'value invalid. use node exchangePredict --help to get list value'
        return {error: errorValueFormat}
    }

    return {from, to}
}

module.exports = validator;