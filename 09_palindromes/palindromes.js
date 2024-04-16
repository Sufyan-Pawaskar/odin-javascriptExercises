const palindromes = function (str) {
    const punct = [",",'""',";",":","."," ","!"]
    let input = str.split('')
    let inp1 = []
    let inp2 = []
    for (let i = 0; i<input.length;i++){
        if (!punct.includes(input[i])){
            inp1.push(input[i].toLowerCase());
            inp2.push(input[i].toLowerCase());
        }
    }
    let rev = inp2.reverse()
    let ret = inp1.join() === rev.join()
    return ret;
};

// Do not edit below this line
module.exports = palindromes;
