
//push,pop = > ending ... unshift,shift = > starting
let arr=[1,2,3,4]
arr.push(5)
arr.push(6,7)
arr.unshift(0)
arr.unshift(-2,-1)
console.log(arr) // [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7]

arr.shift()
arr.shift()
console.log(arr) // [0, 1, 2, 3, 4, 5, 6, 7]

//slice,concat
let sliced=arr.slice(3,6)
console.log(sliced) // [1,2,3]

let a=[1,2,3]
let b=[4,4,5]
let c= a.concat(b)
console.log(c) // [1, 2, 3, 4, 4, 5]

// deep copy
let user = {
    name:"arya",age:22,
    hobbies:["singing" , "dancing" ,"eating"]
}
// let newUser={...user} // only does upto 1 level (shallow copy)

let newUser=JSON.parse(JSON.stringify(user)) //deep copy

newUser.hobbies.shift()
console.log(user)
console.log(newUser)

// toSpliced
let newArr = arr.toSpliced(0,1,10) //store splice array
console.log(arr,newArr)

// includes,find,some
let nums=[11,17,12,10,14]

let hasEvens = nums.some(n=>n%2==0)
let firstEven = nums.find(n=>n%2==0)

console.log(hasEvens)
console.log(firstEven)