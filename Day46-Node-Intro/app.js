
const fs=require("node:fs")

// fs.writeFile('log.txt',"Data to be logged",(err)=>{
//     if (err) console.log(err)
//     else console.log("Logged!")
// })

fs.appendFile("log.txt","\nAppended data",(err)=>{
    if (err) console.log(err)
    else console.log("Appended!")
})
// fs.rename('log.txt', 'data.txt', (err)=>{
//     if(err) console.log(err)
//     else console.log('done!')
// })

// fs.copyFile('data.txt', './backup/dataCopy.txt', (err)=>{
//     if(err) console.log(err)
//     else console.log('done!')
// })


// fs.unlink('./backup/dataCopy.txt', (err)=>{
//     if(err) console.log(err)
//     else console.log('done!')
//     })

fs.rmdir('./backup',{recursive: true}, (err)=>{
    if(err)console.log(err)
        else console.log('done')
})