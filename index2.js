var types = ["dogs", "cats"];

var pets = [
    {
        name: "Agnes",
        age:10,
        type: types[0]
    },
    {
        name: "Scruff",
        age: 15,
        type: types[1]
    },
    {
        name: "Mona Lisa",
        age: 13,
        type: types[0]
    }
];



//Ages ->
///var dog1 = {};

pets.push({
    name: "j",
    age: 15,
    type: types[1]
});



function walk(pet){
    console.log(pet.name + " is Walking" );
}


// loop
for (var i = 0; i < pets.length;  i++) {
    //console.log(pets[i]);
    walk(pets[i]);
}



