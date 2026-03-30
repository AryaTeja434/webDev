
// localStorage.setItem("name","arya")
// console.log(localStorage.getItem("name"))
// localStorage.clear()

let span=document.querySelector("span")
let input= document.querySelector("input")
let button=document.querySelector("button")

button.addEventListener("click",()=>{
    localStorage.setItem("name",input.value)
    console.log(input.value)
})

span.innerText=localStorage.getItem("name")
console.log(localStorage.getItem("name"))


//session storage

let increment = document.getElementById("increment")
let decrement = document.getElementById("decrement")
let counter = document.getElementById("count")

counter.innerText = sessionStorage.getItem("count") || 0

increment.addEventListener("click",()=>{
    let new_count = parseInt(sessionStorage.getItem("count")) + 1 || 0
    counter.innerText= new_count
    sessionStorage.setItem("count",new_count)
})

decrement.addEventListener("click",()=>{
    new_count = parseInt(sessionStorage.getItem("count")) - 1
    counter.innerText= new_count
    sessionStorage.setItem("count",new_count)
})