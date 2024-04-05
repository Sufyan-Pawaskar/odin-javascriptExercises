const removeFromArray = function(arr,...xargs) {
    if (xargs.length > 0){
        let newArr =[];
        for (let i = 0; i<arr.length; i++){
            if (!xargs.includes(arr[i])){
                newArr.push(arr[i]);
            }
        }
        return newArr;
    } else{
        return arr;
    }
};

// Do not edit below this line
module.exports = removeFromArray;
