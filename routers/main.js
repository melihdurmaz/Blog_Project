//bu sınıf gerekli yönelndirmeleri yapmak için açıldı aynısı
//app.js de de vardı ama temiz kod için ayrı bir js de yazdım

const bodyParser = require('body-parser')
const express=require('express')
const router =express.Router()
const Post=require('../models/post')


router.get('/blog', (req, res) => {
    Post.find({}).lean().then(posts => {
        const currentDate = new Date()
        res.render('site/blog', { posts, date: currentDate })
    });
});



router.get('/',(req,res)=>{ res.render('site/index') })
router.get('/about',(req,res)=>{res.render('site/about') })
router.get('/contact',(req,res)=>{res.render('site/contact') })




module.exports=router