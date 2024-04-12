const add = function(int1,int2) {
  return int1+int2;
};

const subtract = function(int1,int2) {
	return int1-int2
};

const sum = function(arr) {
	return arr.reduce((total,currItem)=>{
    return total+currItem;
  },0)
};

const multiply = function(arr) {
  let xx = arr.reduce((total, currItem)=>{
  return total*currItem;
});
  return xx
};

const power = function(int1,int2) {
	return int1**int2
};

const factorial = function(int1) {
  if (int1 == 1 || int1 == 0){
    return 1;
  } else{
    return (int1 * factorial(int1-1))
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
