'use strict';

const arr = [1, 2, 3, -1, -2, -3];

function funcArray (arr){
    const exampleArr = [];

    if (arr.length === 0) {
        return 'Array is empty'
    }

    for (let i = 0; i < arr.length; i++) {
        if ( arr [i] > 0) {
            exampleArr.push(arr [i]);
        }
    }

    if ( exampleArr.length === 0){
        return null;
    }
    return exampleArr;
}

console.log(funcArray(arr))