//PSEUDOCODE:
// input: two strings
//output: bool value

// 1.write a function anagramCheck()
// 2. Make both strings lower case
// 3. Get rid of all whitespaces from both strings
// 4. Create 2 new Arrays that will store each char from each string
// 5. Loop through array to add all characters of the string into an array
// 6. Sort both arrays
// 7. Compare nth elements from both arrays
// If they do not match, return false
// Otherwise, return true


function anagramCheck(str1, str2){
    
    str1 = str1.toLowerCase()
    str1 = str1.trim()
    var array1 = new Array()

    str2 = str2.toLowerCase()
    str2 = str2.trim()
    var array2 = new Array()

    for(let i = 0; i < str1.length; i++){
        array1.push(str1[i])
    }

    for(let i = 0; i < str2.length; i++){
        array2.push(str2[i])
    }

    array1 = array1.sort()
    array2 = array2.sort()

    //console.log(`array1 = ${array1}\narray2 = ${array2}`)

    let i = 0

    do{
        if(array2[i] !== array1[i]){
            return false
        }
        i++
    }while(i < array1.length);


        return true
    }

    



console.log(anagramCheck('abcde265', 'c2abed'))
console.log(anagramCheck('CharM', 'mARcH'))
