console.log(1 + 5);

/*********
 * Data
 *********/

// Variables

var dog = "Agnes"; // Data Declaration
var dog2 = "Athena";// Data Declaration
var dog3 ="Mona Lisa";// Data Declaration

/***********
 * Actions
 **********/

console.log(dog); // Action Call

// keyword identifier (parameters) {//body}

function bark(dog){ // Action Declaration
    //Declaration
    console.log(dog + " Woof Woof" );
}

//bark(dog2); //Action Call
bark(dog); // Action Call
// bark(dog3); //Action Call


/***
 *
 * Objects
 * Collections of related Actions and Data
 ***/

// var pet = {
//     type: "Dog",
//     name: "Bruce" // properties / data
// };
//
//
// pet.walk = function() {
//     console.log(this.name + " Walking");
// } //Method actions
//
// bark(pet);
//
//
// pet.walk();
//
//
// console.log(dog.length);
// console.log(dog.charAt(4));