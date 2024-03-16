//bu sınıf gerekli yönelndirmeleri yapmak için açıldı aynısı
//app.js de de vardı ama temiz kod için ayrı bir js de yazdım

const express=require('express')
const router =express.Router()


router.get('/',(req,res)=>{
    res.render('site/index') //burada sadece sayfayı çağırdım 
})

router.get('/about',(req,res)=>{
    res.render('site/about') //burada sadece sayfayı çağırdım 
})


router.get('/blog',(req,res)=>{
    res.render('site/blog') //burada sadece sayfayı çağırdım 
})

router.get('/contact',(req,res)=>{
    res.render('site/contact') //burada sadece sayfayı çağırdım 
})

router.get('/login',(req,res)=>{
    res.render('site/login') //burada sadece sayfayı çağırdım 
})
router.get('/register',(req,res)=>{
    res.render('site/register') //burada sadece sayfayı çağırdım 
})
router.get('/posts/new',(req,res)=>{
    res.render('site/addpost') //burada sadece sayfayı çağırdım 
})

router.post('/posts/test',(req,res)=>{
    res.send('test ok')
})

module.exports=router