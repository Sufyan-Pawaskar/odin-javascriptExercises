const reverseString = function(strArg) {
    let strArr = strArg.split('');
    strArr.reverse()
    let reversedStr = ''
    for (let i = 0; i<strArr.length; i++){
        reversedStr += strArr[i];
    }
    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
