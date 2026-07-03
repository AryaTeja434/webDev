
const http=require("http")
const url=require("url")
const fs=require("node:fs")

const server=http.createServer((req,res)=>{
    if(req.url === '/favicon.ico') return res.end();

    const myUrl=url.parse(req.url,true)
    console.log(myUrl.pathname)

    switch (myUrl.pathname){
        case '/':
            res.end("Landing page")
            break
        case '/home':
            res.end('Welcome to Home page')
            break
        case '/profile':
            res.end('Welcome to profile page')
            break
        case '/search':
            const {name,age}=myUrl.query
            const data=`Name:${name}   Age:${age}\n  ${JSON.stringify(myUrl.query)}`
            fs.appendFile("log.txt",data,(err)=>{
                if (err) console.log("Failed to log data")
            })
            res.end(`Hi ${name}.You are ${age} years old.`)
            break
        default:
            res.end("404 error")
            break
    }
})

server.listen(8000,()=>{
    console.log("Server loading")
})