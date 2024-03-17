//bu sınıf gerekli yönelndirmeleri yapmak için açıldı aynısı
//app.js de de vardı ama temiz kod için ayrı bir js de yazdım

const bodyParser = require('body-parser')
const express=require('express')
const router =express.Router()
const Post=require('../models/post')


router.get('/',(req,res)=>{
    res.render('site/index') //burada sadece sayfayı çağırdım 
})

router.get('/about',(req,res)=>{
    res.render('site/about') //burada sadece sayfayı çağırdım 
})


router.get('/blog',(req,res)=>{

    Post.find({}).lean().then(posts => {
        res.render('site/blog',{posts:posts})
    })

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


module.exports=router