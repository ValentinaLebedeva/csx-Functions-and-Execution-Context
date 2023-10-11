
/*
function addN(arr, n) {
    // ADD CODE HERE
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] + n);
    }
    return result
}

console.log(addN([1, 2, 3], 3)); // expected log [4, 5, 6]
console.log(addN([3, 4, 5], 2)); // expected log [5, 6, 7]


function makePlural(arr) {
    // ADD CODE HERE
    let result = []
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + "s";
        result.push(arr[i])
    }
    return result
}


const arr1 = ['lion', 'tiger', 'bear']
const arr2 = ['computer', 'video game', 'system']

// Uncomment these to check your work!
console.log(makePlural(arr1)); // should log: ['lions', 'tigers', 'bears']
console.log(makePlural(arr2)); // should log: ['computers', 'video games', 'systems']

function getTheSum(arr) {
    // ADD CODE HERE
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result
}

// Uncomment these to check your work!
console.log(getTheSum([3, 6, 9])); // expected log 18
console.log(getTheSum([10, 11, 12])); // expected log 33



// ADD CODE HERE 

// Uncomment these to check your work!

function multiplyAll(arr) {
    let num = Array.from(arguments);
    let result = 1;

    for (let i = 0; i < num.length; i++) {
        result *= num[i];
    }
    return result
}
console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
console.log(multiplyAll(5, 5, 5, 3)) // should log: 375


function mergingElements(array1, array2) {
    // ADD CODE HERE
    let result = [];

    for (let i = 0; i < array1.length; i++) {

        newArray.push(array1[i] + array2[i]);
    } return result;
}

// Uncomment these to check your work!
console.log(mergingElements([1, 2, 3, 4], [5, 6, 7, 8])); // expected log [6, 8, 10, 12]
console.log(mergingElements([7, 3, 6, 0], [3, 9, 17, 81])); // expected log [10, 12, 23, 81]

function mergingTripletsAndQuints(array1, array2) {
      let result = [];

      for (let i = 0; Math.max(i < array1.length, i < array2.length); i++) {
        if (array1[i] % 3 === 0 || array1[i] % 5 === 0) {
          result.push(array1[i] + array2[i]);
        } else {
          result.push(array1[i]);
        }
      }
      return result;
    }

// Uncomment these to check your work!
// console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
// console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]



function imAboutToExplodeWithExcitement(n) {

    while (n >= 0) {

        if (n > 5) console.log(n)

        else if (n === 5) console.log(`Oh wow, I can't handle the anticipation!`)
        else if (n === 3) console.log(`I'm about to explode with excitement!`)
        else if (n === 0) console.log(`That was kind of a let down`)
        else if (n > 0) console.log(n)
        n--
    }
}


imAboutToExplodeWithExcitement(10); 


function closestToTheMark(player1, player2) {
    const theMark = Math.floor(Math.random() * 100)

    let player1Amount = Math.abs(player1 - theMark);
    let player2Amount = Math.abs(player2 - theMark);

    console.log(`If theMark is ${theMark}...`);
    if (player1Amount > player2Amount) {
        return 'Player 2 is closest';
    } else if (player2Amount > player2Amount) {
        return 'Player 1 is closest';
    }
    // ADD CODE HERE
}

//'Player 1 is closest' or 'Player 2 is closest' 
// Uncomment the line below to check your work!
console.log(closestToTheMark(25, 75));



function getTheRange(arr){
    // ADD CODE HERE
    let maxNum, minNum;
    
    for(let i = 0; i<arr.length; i++){
    let curNum = arr[i];
    if(minNum === undefined || curNum < minNum){
    minNum = curNum;
    }
    if(maxNum === undefined || curNum > maxNum){
    maxNum = curNum;
    }
    }
    return[minNum, maxNum, maxNum- minNum]
    }
    // ADD CODE HERE
    const max = Math.max(...arr);
    const min= (Math.min(...arr));
    
    const result= max-min;
    return [min, max, result];
    
    // Uncomment these to check your work!
    console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]

    Write a function addingAllTheWeirdStuff which adds
     the sum of all the odd numbers in array2 to each element under 10 in array1. 
     Similarly, addingAllTheWeirdStuff should also add the sum of all the even numbers in array2
      to those elements over 10 in array1.

BONUS: If any element in array2 is greater than 20, 
add 1 to every element in array1.

function addingAllTheWeirdStuff(array1, array2) {
    // ADD CODE HERE
    //add the sum of odd# нечетные from array2 to each el < 10 array1

    // add the sum of even# четные from array2 to el > 10 in array1

    //el > 20 from array2 add 1 to el array 1

    let oddSum = 0;
    let evenSum = 0;
    let bonus = 0;
    let result = [];

    for (let i = 0; i < array2.length; i++) {
        if (array2[i] % 2 === 0) {
            oddSum += array2[i]
        } else {
            evenSum += array2[i]
        }
        if (array2[i] > 20) {
            bonus = 1;
        }
    }


    for (let i = 0; i < array1.length; i++) {
        if (array1[i] < 10) {
            result.push(array1[i] + evenSum + bonus);
        } else {
            result.push(array1[i] + oddSum + bonus);

        }
    }

    return result

    /*
    for (const num of array2) {
        if (num > 20) {
            bonus = 1;
        }
        if (num % 2 === 0) {
            evenTotal += num;
        }
        else {
            oddTotal += num;
        }
    }
    for (const num of array1) {
        if (num < 10) {
            result.push(num + oddTotal + bonus)
        }
        else {
            result.push(num + evenTotal + bonus)
        }
    }
    return result;
    
}
// Uncomment these to check your work!
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]

Write a function disemvowel that takes in a string and returns a new string with all vowels removed.

function disemvowel(string) {
  // ADD CODE HERE
let result ="";
let vowels={
'a' : true,
'e' : true,
'i' : true,
'o' : true,
'u' : true
}

for(let i = 0; i<string.length; i++){
let currentChar = string[i].toLowerCase();
if(!vowels[currentChar]){
result+=string[i];
}

}
return result;
}

// Uncomment these to check your work!
// console.log(disemvowel('CodeSmith')); // => 'CdSmth'
// console.log(disemvowel('BANANA')); // => 'BNN'
// console.log(disemvowel('hello world')); // => 'hll wrld'

*/
/*

Create a function addWaldo that accepts an object with keys
 being first names and values being last names. 
 For example addWaldo({'Luke': 'Skywalker', 'Harley': 'Quinn', 'Ryan': 'Reynolds'}) 
 should add the key 'Waldo' with the value 'unknown' to the object and return the mutated object.


function addWaldo(obj) {
    obj.Waldo = "unknown";
    return obj;
}
// Uncomment these to check your work!
const siliconValley = { 'Richard': 'Hendricks', 'Erlich': 'Bachman', 'Bertram': 'Gilfoyle' }
console.log(addWaldo(siliconValley)) // should log:{ Richard: 'Hendricks', Erlich: 'Bachman', Bertram: 'Gilfoyle', Waldo: 'unknown' }

*/

/*
Create a function findWaldo that accepts an object and returns 
the value associated with the key 'Waldo'. 
If the key 'Waldo' is not found, the function should return 'Where's Waldo?'

function findWaldo(obj) {
if (obj.Waldo) {
    return obj["Waldo"]
} else {
return "Where's Waldo?"
}
}
// Uncomment these to check your work!
 const DC = {'Bruce': 'Wayne', 'Harley': 'Quinn'}
 const supernatural = {'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown'}
 console.log(findWaldo(DC)) // should log: 'Where's Waldo?'
 console.log(findWaldo(supernatural)) // should log: 'unknown'

 */

/*
Write a function arrayBuilder that takes in a count object
 and returns an array filled with the appropriate numbers of elements. 
 The order of the elements in the array does not matter, 
 but repeated elements should be grouped.


function arrayBuilder(obj) {
    // ADD CODE HERE
    let arr = [];

    for (let key in obj) {
        let arrEl = obj[key];
        while (arrEl > 0) {
            arr.push(key);
            arrEl -= 1;
        }
    }
    return arr;
}

// Uncomment these to check your work!
console.log(arrayBuilder({ 'cats': 2, 'dogs': 1 })); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []
*/

/*
Convert the function named functionDeclaration to an anonymous function expression 
and assign it to a variable called myFunc.


// MODIFY THE CODE BELOW 
let myFunc = function () {
    return "Hi there!";
};

console.log(myFunc()) //should log: "Hi there!"
*/

/*
For this challenge, convert the function myJob from ES5 syntax to arrow function syntax.

function myJob (name, profession) {
    return `Hi, my name is ${name} and I'm a ${profession}.`
  }
  */

const myJob = (name, profession) => `Hi, my name is ${name} and I'm a ${profession}.`;
console.log(myJob("Jon", "Knights Watchman"));