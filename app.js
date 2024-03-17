const path=require('path')
const express = require('express')
const exp = require('constants')
const expphbs=require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileUpload=require('express-fileupload')



const app = express()
const port = 3000
const hostname ='127.0.0.1'
//mongodb bağlanma işlemleri dikkat et 
mongoose.connect('mongodb://127.0.0.1/nodeblog_db')
.then(() => console.log('Connected!'))


app.use(fileUpload())
//app.use(express.static(path.join(__dirname, 'Public')))

 app.use(express.static('Public'))
/**alttaki iki satırda handlebars ı kullandık */
 app.engine('handlebars', expphbs.engine());
 app.set('view engine', 'handlebars');


 // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//file upload için


 //routers klasorünü kullanmak için klasörü dahil ettik
 const main=require('./routers/main')
 app.use('/',main)   //sayfa yönlendirmeleri için main klasörünü kullandım
 //routers klasorünü kullanmak için klasörü dahil ettik
 const posts=require('./routers/posts')
 app.use('/posts',posts)   //sayfa yönlendirmeleri için posts klasörünü kullandım




/**burada ise serverimi görmek için app.listen komutunu kullandım */
app.listen(port,hostname, () => {
  console.log(`server çalışıyor,http://${hostname}:${port}`)
})