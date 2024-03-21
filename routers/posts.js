const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router()
const path = require('path')
const Post = require('../models/post')
const session = require('express-session')


router.get('/new', (req, res) => {
    if(req.session.userId){ // burada eğer login olunmuşsa ife girer
        res.render('site/addpost') // Sadece sayfayı çağırdım 
    }else{
        res.redirect('/users/login')// eğer login olunmamışsa bizi login sayfasına yönlendirir
    }
    
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
    // Yüklenen görseli bir klasöre attım orada tutuyorum
    let post_image = req.files.post_image
    post_image.mv(path.resolve(__dirname, '../Public/img/postimages', post_image.name))

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
