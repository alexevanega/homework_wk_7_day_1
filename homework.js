//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

const find_words = (string, arr) => {
    for (let i in arr) {
        let word=string.search(arr[i]);
        if(word==-1) {console.log('No Matches')}
        else {console.log(arr[i])}
    }
};

//Call method here with parameters
find_words(dog_string,dog_names)

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i=0;i<=arr.length;i+=2) 
    {arr.splice(i,1,'even index')}
    console.log(arr)
};

replaceEvens(arr)

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"].

//codewars re-solve #1

// The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

// In this kata we will recreate that stunt... sort of.

// You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

// The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

// Return the resulting lamps string. See example tests for more clarity.

// function flyBy(lamps, drone){
//     for(let i=0;i<drone.length;i++) {
//       lamps = lamps.replace('x','o')
//     }
//     return lamps
//   };

//codewars re-solve #2

// Write a function called repeatStr which repeats the given string string exactly n times.

// function repeatStr (n, s) {
//     let ans=''
//     for(let i=1;i<=n;i++) {
//       ans+=s
//     }
//     return ans;
//   };