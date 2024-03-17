const bodyParser = require('body-parser')
const express=require('express')
const router =express.Router()
const Post=require('../models/post')


router.get('/new',(req,res)=>{
    res.render('site/addpost') //burada sadece sayfayı çağırdım 
})

router.post('/post/test',(req,res)=>{
  // console.log(req.body) //body den kastımız add post sayfasında ki form girdileri
  Post.create(req.body).
  then(post => {
    console.log(post);
  })
  .catch(err => {
    console.error(err);
  })
   res.redirect('/')
})

module.exports=router

