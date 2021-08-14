// Code your solution in this file!
function returnFirstTwoDrivers(a){
    return a.slice(0,2)
}

function returnLastTwoDrivers(a){
    return a.slice(a.length-2, a.length)
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(int) {
    console.log(int)
    return function(f){
        console.log(f)
        return int * f
    }
}

function fareDoubler(f){
    return f * 2
}
function fareTripler(f){
    return f * 3
}

function selectDifferentDrivers(a, f) {
    console.log(a)
    console.log(f)
    return f(a)
}