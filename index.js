const express=require("express")
const app  = express()
const path =require("path")




app.use(express.static(path.join(__dirname,"public/styles")))
app.use(express.static(path.join(__dirname,"public/scripts")))


app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.get("/home",function(request,response){
    response.sendFile(path.join(__dirname,"public/index.html"))
})

app.get("/",function(request,response){
     response.send("Hello!!! Author is working fine...")
})

app.listen("9000",function(){
    console.log("server started in port number 9000")
})