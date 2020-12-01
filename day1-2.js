const inputs = require('./day1.data')

inputs.find((nb1, index) => {
    const result = inputs.find((nb2, i2) => {
        if(nb1 + nb2 > 2020 || i2 === index){
            return false
        }
        const result = inputs.find((nb3, i3) => {
            if(i2 === index || i3 === index){
                return false
            }
            if(nb1 + nb2 + nb3 === 2020){
                console.log(nb2, nb1, nb3, nb2 * nb1 * nb3)
                return true
            }
            return false
        })
    });
    return !!result;
})
