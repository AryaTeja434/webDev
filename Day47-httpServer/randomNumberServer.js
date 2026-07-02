

const http=require("http")
const fs=require("node:fs")

function logEvent(ip){
    console.log("Function called")
    const timestamp = new Date().toISOString();
    const message = `Time:${timestamp} Add:${ip}\n`
    
    fs.appendFile("server.log",message,(err)=>{
        if (err) console.log("Failed to log!")
    })
}

let random=0
setInterval(()=>{
    random = Math.floor(Math.random() * 100)
},2000)


const server= http.createServer((req,res)=>{
    let ip=req.socket.remoteAddress
    
    logEvent(ip)
    
    res.write(`
        <body>
            <h1>Random Number Generator</h1>
            <p class="number">Random Number: ${random}</p>
            <p>This page automatically refreshes every 2 seconds.</p>
        </body>
        <script> setTimeout(()=>{location.reload()},2000) </script>
        `)
    res.end()
})

server.listen(8000,()=>{
    console.log("Server loading")
})

