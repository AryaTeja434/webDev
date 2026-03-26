let shoppingList = [
    "Milk",
    "Eggs",
    "Bread",
    ["Apples", "Bananas", "Oranges"],
    ["Potatoes", "Tomatoes", "Onions"]
];

// fetch first item
console.log(shoppingList[0])

// push method
shoppingList[4].push("Carrots")
console.log(shoppingList[4])

// pop method
shoppingList[4].pop()
console.log(shoppingList[4])

//splice method
shoppingList[4].splice(1,2,"Cucumbers","Bell Peppers")
console.log(shoppingList[4])

let student = {
    name: "Amit",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};

// specific value
console.log(student.name)

// adding new property
student["phone"]="123-456-789" //or student.phone="123-456-789"
console.log(student)

// deleting a property
delete student["grade"]
console.log(student)

// modification
student.age=21
console.log(student)

//Conditionals
let number= -10;

if (number===0){
    console.log("Zero")
}
else if (number>1){
    console.log("Positive")
}
else{
    console.log("Negative")
}

let score= 69;
if (score>=90 && score<=100){
    console.log("A")
}
else if (score>=90 && score<=89){
    console.log("B")
}
else if (score>=70 && score<=79){
    console.log("C")
}
else if (score>=60 && score<=69){
    console.log("D")
}
else{
    console.log("F")
}