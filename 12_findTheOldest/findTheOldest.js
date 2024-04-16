const findTheOldest = function(passedArr) {
    let arr = passedArr.reduce((final, currItem)=>{
        let obj = currItem;
        let currAgeDiff = 0
        let prevDiff = 0;
        if("yearOfDeath" in obj){
            currAgeDiff = obj.yearOfDeath - obj.yearOfBirth;
        } else{
            const today = new Date();
            const year = today.getUTCFullYear();
            currAgeDiff = year - obj.yearOfBirth;
        }
        if(final){
            if("yearOfDeath" in final){
                prevDiff = final.yearOfDeath - final.yearOfBirth;
            } else{
                const today1 = new Date();
                const year1 = today1.getUTCFullYear();
                prevDiff = year1 - final.yearOfBirth;
            }
            if(currAgeDiff > prevDiff){
                console.log()
                return obj;
            } else{
                return final;
            }
        } else{
            return obj
        }

    })
    return arr;
};

// Do not edit below this line
module.exports = findTheOldest;
