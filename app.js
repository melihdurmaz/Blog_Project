/*const http=require('http')
const fs=require('fs')
const hostname ='127.0.0.1'
const port =3000

const indexPage=fs.readFileSync('index.html')
const aboutPage=fs.readFileSync('about.html')


const server=http.createServer( (req,res)=>{
    if(req.url==='/'){
        return res.end(indexPage)
    } else if(req.url == '/about'){
        return res.end(aboutPage)
    }else{
        res.statusCode=404
         return res.end('sayfa bulunamadı')
    }


})

server.listen(port,hostname,()=>{
    console.log(` server çalışıyor,http://${hostname}:${port}`)
})*/
const path=require('path')
const express = require('express')
const exp = require('constants')
const app = express()
const port = 3000
const hostname ='127.0.0.1'

 app.use(express.static('Public'))



 app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'site/index.html'))
 })




/**burada ise serverimi görmek için app.listen komutunu kullandım */
app.listen(port,hostname, () => {
  console.log(`server çalışıyor,http://${hostname}:${port}`)
})