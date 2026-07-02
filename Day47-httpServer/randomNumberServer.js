
const http=require("node:http")
const fs=require("node:fs")


function logEvent(){
    
}
const PORT = 8001

let random=0

setInterval(()=>{
    random= Math.floor(Math.random()*100)
},2000)

const server = http.createServer((req,res)=>{
    console.log("no")
    res.write(`<h1>Random Number: ${random} </h1>`)
    res.end()
})

server.listen(PORT,()=>{
    console.log("server is loading")
})