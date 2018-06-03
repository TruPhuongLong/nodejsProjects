// get format date: with format: yyyy-MM-dd
const formatDate = (newDate) => {
    const year = newDate.getFullYear();
    let month = newDate.getMonth() + 1; // getMonth() return range: 0-11 -> need + 1 -> 1 -12
    month = month >= 10 ? month : `0${month}`; 
    const date = newDate.getDate() >= 10 ? newDate.getDate() : `0${newDate.getDate()}`

    return `${year}-${month}-${date}`
}

const timeValidator = (time) => {
    const newDate = new Date(time)
    if(newDate.valueOf(Date)){
        // check date : < new Date() && > 1999-01-01 -> it time is rate avalable
        if(newDate > new Date() || newDate < new Date('1999-01-01')){
            return {error: 'time must in range: 1999-01-01 to now'}
        }
        return {error: null}
    }else{
        return {error: 'time invalid format'}
    }
}

module.exports = {
    formatDate,
    timeValidator,
}