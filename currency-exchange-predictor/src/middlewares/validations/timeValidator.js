// get current time: with format: yyyy-MM-dd
const now = () => {
    const time = new Date();
    const year = time.getFullYear();
    let month = time.getMonth() + 1; // getMonth() return range: 0-11 -> need + 1 -> 1 -12
    month = month >= 10 ? month : `0${month}`; 
    const date = time.getDate() >= 10 ? time.getDate() : `0${time.getDate()}`

    return `${year}-${month}-${date}`
}

module.exports = {
    now,
}