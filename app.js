const express =require ('express')
const router=express.Router()
const  expphbs=require ('express-handlebars')
const app = express()
const port = 3000
const hostname = '127.0.0.1'
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const expressSession = require('express-session')
const MongoStore = require('connect-mongo')

//mongodb bağlanma işlemleri dikkat et 
mongoose.connect('mongodb://127.0.0.1/nodeblog_db')
.then(() => console.log('Connected!'))



app.use(expressSession({
  secret:'testotaylan',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1/nodeblog_db' })
}))


app.use(fileUpload())
//app.use(express.static(path.join(__dirname, 'Public')))

 app.use(express.static('Public'))

 // parse application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: false }))



app.engine('handlebars', expphbs.engine());
app.set('view engine', 'handlebars');
 // parse application/json
app.use(bodyParser.json())




 //routers klasorünü kullanmak için klasörü dahil ettik
 const main=require('./routers/main')
 const posts=require('./routers/posts')
 const users=require('./routers/users')
 
 app.use('/',main)   
 app.use('/posts',posts) 
 app.use('/users',users)
 //sayfa yönlendirmeleri için posts klasörünü kullandım


/**burada ise serverimi görmek için app.listen komutunu kullandım */
app.listen(port,hostname, () => {
  console.log(`server çalışıyor,http://${hostname}:${port}`)
})