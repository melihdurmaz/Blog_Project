const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const path = require('path');
const Post = require('../models/post');

router.get('/new', (req, res) => {
    res.render('site/addpost'); // Sadece sayfayı çağırdım 
});

router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => {
            res.render("site/post", { post: post.toJSON() })
        })
        .catch(err => {
            console.error(err);
            res.render('site/addpost')
        });
});

router.post('/post/test', (req, res) => {
    //yüklene görseli bir klasöre attım orada tutuyorum
    let  post_image=req.files.post_image
    post_image.mv(path.resolve(__dirname,'../Public/img/postimages',post_image.name))


    Post.create({
        ...req.body,
        post_image: `/img/postimages/${post_image.name}`
    })
        .then(post => {
            console.log(post)
            res.redirect('/')
        })
        .catch(err => {
            console.error(err)
            res.status(500).send('Blog gönderisi oluşturulamadı')
        });
});

module.exports = router
