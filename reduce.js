/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {//declaring a function 
    return arr.reduce(function(acc, item) {//we are initiating the reduce method on the array and starting with an empty array since we are building a new array 
        acc.push(item[key]);//since we are bulding the array, we are pushing the value of the key into the new array
        return acc;//we are returning the new array from the accumulator
    }, []);
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {//may need more practice on this one 
    var vowels = "aeiou";//creating a variable to hold the vowels

    return Array.from(str.toLowerCase()).reduce(function(acc, letter) {//converting the string input into an array to parse through AND turning all characters into lowercase, then performing the reduce method 
        if (vowels.includes(letter)) {//if the vowels are includes in the letters of the array we converted 
            if (acc[letter]) {//checking to see if the vowel has been seen already in the string before 
                acc[letter]++;
            } else {
                acc[letter] = 1;//records how weve encountered a new vowel in the string 
            }
        }
        return acc;
    }, {});
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {//declares the function 
    return arr.reduce(function(acc, obj) {//performing the reduce method on the array, redcing the array down to the accumulator, using the reduce methon on each object (next value)
        obj[key] = value;//adds a new property to the current object with the name key and value called value, this is how we add a new key-value pair to each object 
        acc.push(obj);//adding the newly added key-pair to each acc
        return acc;//return the new array 
    }, []);
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {// delcaring the function 
    return arr.reduce(function(acc, item) {//performing the reduce method on the array
        if (callback(item)) {//using the callback function on the item to check for criteria
            acc[0].push(item);//if met, then we use this line
        } else {
            acc[1].push(item);//if not met, we use this line
        }
        return acc;//return the new array 
    }, [[], []]);
}
