
const express=require("express")
const app=express()

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/form',(req,res)=>{
    res.render('form')
})

app.post('/submit',(req,res)=>{
    console.log(req.body)
    res.render('details',{
        name: req.body.name,
        email: req.body.email,
        age:req.body.age,
        color:req.body.color,
    })
})

app.listen(8000,()=>{
    console.log("Serving")
})