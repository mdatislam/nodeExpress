require("dotenv").config();
const express= require("express");
const app=express();
const port=process.env.PORT|| 3000;
hostename="127.0.0.1"
const bodyParser= require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/homePage.html")
});

app.get("/circle",(req,res)=>{
    res.sendFile(__dirname+"/circle.html")
});

app.post("/circle",(req,res)=>{
    const radious= req.body.radious;
    const area= Math.PI * radious * radious;
    res.send(`Area:${area}`)
    
});


app.get("/triangle",(req,res)=>{
    res.sendFile(__dirname+"/triangle.html")
});

app.post("/triangle",(req,res)=>{
    const base= req.body.base;
    const hight= req.body.hight;
    const area= 0.5 * hight * base;
    res.send(`<h1>Area:${area}</h1>`)
});


// Form Data transfar

app.get("/register",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
});
app.post("/register",(req,res)=>{
    const name= req.body.fullName;
    const age= req.body.age;
    res.send(` <h1>your name is ${name} & Your age is ${age}</h1>`)
})


app.listen(port,hostename,()=>{
    console.log(`server is running at http://${hostename}:${port}`)
})