//console.log(1 + 5);

/*********
 * Data
 *********/



var dog = {
    age: 10,
    dailyLog: []
    }; // Data Declaration

//dot notation
dog.name = "Agnes";

console.log(dog);

dog.dailyLog.push("Intro:" + dog.name);


var dog2 = "Athena";// Data Declaration

//console.log(dog2);


/***********
 * Actions
 **********/


function bark(name){ // Action Declaration
    //Declaration
    console.log(name + " Woof Woof" );
}

bark(dog.name); //Action Call
dog.dailyLog.push("Barked");
//bark(dog); // Action Call
// bark(dog3); //Action Call


/***
 *
 * Objects
 * Collections of related Actions and Data
 *
 * create->  var objName= {} | objName.[someKey] = value | function  | obj.[anotherKey] = function
 * access -> objName.someKey | objName.anotherKey
 ***/



var pet = {
    type: "Cat",
    name: "Scruff" // properties / data
};



pet.bark = function bark(){ //method / actions /

    if(this.type.charAt(0) === 'D'){
        console.log(this.type.charAt(0) === 'D');
        console.log(this.name + " Woof Woof");
    }else {
        console.log("Sorry I'm a " + this.type );
    }

};

pet.bark();

//console.log("Hello World");


/********
 *
 * Almost everything in JavaScript is a Object
 *
 * *************/

var dogsColors =  ["Grey","Blue", "Black"]; //zero base index

dog.color = dogsColors[2];
pet.color = dogsColors[0];
console.log(dog);
console.log(pet);


var arr1 = [];

arr1.somePropLikeAnObj = "Blah";




