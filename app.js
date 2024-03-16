const path=require('path')
const express = require('express')
const exp = require('constants')
const expphbs=require('express-handlebars')
const mongoose = require('mongoose')



const app = express()
const port = 3000
const hostname ='127.0.0.1'

 app.use(express.static('Public'))
/**alttaki iki satırda handlebars ı kullandık */
 app.engine('handlebars', expphbs.engine());
 app.set('view engine', 'handlebars');

 mongoose.connect('mongodb://127.0.0.1:3000/nodeblog_db')
 .then(() => console.log('Connected!'))



 app.get('/',(req,res)=>{
    res.render('site/index') //burada sadece sayfayı çağırdım 
 })

 app.get('/about',(req,res)=>{
    res.render('site/about') //burada sadece sayfayı çağırdım 
 })


 app.get('/blog',(req,res)=>{
    res.render('site/blog') //burada sadece sayfayı çağırdım 
 })
 



/**burada ise serverimi görmek için app.listen komutunu kullandım */
app.listen(port,hostname, () => {
  console.log(`server çalışıyor,http://${hostname}:${port}`)
})