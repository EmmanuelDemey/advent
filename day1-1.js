const inputs = require('./day1.data')

inputs.find((number, index) => {
    const result = inputs.find((m, i2) => {
        if(i2 === index){
            return false
        }
        if(m + number === 2020){
            console.log(m, number, m * number)
            return true
        }
        return false
    });
    return !!result;
})
