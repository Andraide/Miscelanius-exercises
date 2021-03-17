/*
    Progam to calculte the missing number on a continuos array of integer numbers. 

    Solution I :
        Take the greater number a make a sumatory of all integer 
        number, the last difference is the number that left.

    Solution II :
        Sort the array, and the number with a difference greater 
        than one is the index with the missing number
*/


function getMaxOfArray(numArray)
{
    return Math.max.apply(null, numArray)
}

function getMinOfArray(numArray)
{
    return Math.min.apply(null, numArray)
}

function distance( x , y ) {
  return Math.abs(x - y)
}

function numLeftSolII(distance, max) 
{
    if(distance>1)
    {
        console.log("numLeftI", max - 1)
        return max - 1
    }
}

var arr = [16, 18, 19, 20] // [3, 2, 5, 1]
const len = arr.length
const max = getMaxOfArray(arr)
const min = getMinOfArray(arr)
const arrSorted = arr.sort()

////////////////////////////////////////
//  Solution I
////////////////////////////////////////

var sum = 0
arr.forEach((x,i,v) => {
    sum = x + sum
})

var sum1 = 0
for(i= min; i<= max; i++)
{
    sum1 = i + sum1
}

const numLeft = sum1 - sum 
console.log("numLeft", numLeft)

////////////////////////////////////////
// Solution II
////////////////////////////////////////

for ( i=1 ; i<len ; i++)
{
    var dist = distance(arrSorted[i-1], arrSorted[i])
    var numLeftI = numLeftSolII(dist, arrSorted[i])
}