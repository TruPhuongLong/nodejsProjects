const validator = (command) => {
    const {from, to} = command;
    const mes = 'command invalid. use: node exchangePredict --from "value" --to "value"'
    
    if(!from || !to){
        console.log(mes)
        return;
    }

    return {from, to}
}

module.exports = validator;