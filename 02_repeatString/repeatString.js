const repeatString = function(strArg,iterate) {
    if (iterate >= 0){
        let returnStr = '';
        for (let i = 0; i<iterate;i++){
            returnStr += strArg;
        }
        return returnStr;
    } else{
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = repeatString;
