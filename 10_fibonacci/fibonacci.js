const fibonacci = function(num1) {
    let num = parseInt(num1)
    let fib0 = 0;
    let fib1 = 1;
    if (num == 0){
        return fib0;
    } else if (num == 1){
        return fib1;
    } else if (num > 1){
        for( let j = 2; j<num+1;j++){
            let fib = fib0+fib1;
            fib0 = fib1;
            fib1 = fib;
        }
        return fib1;
    }else{
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
