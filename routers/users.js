const express =require ('express')
const router=express.Router()
const User=require('../models/user')

router.get('/register',(req,res)=>{ res.render('site/register') })
router.get('/login',(req,res)=>{res.render('site/login') })

router.post('/register', (req, res) => {
    User.create(req.body).then(post => {
        console.log(User)
        res.redirect('/')
      })
      .catch(err => {
        console.error(err)
      })
})


router.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })

        if (user) {
            if (user.password == password) {
                // Kullanıcı oturumu aç
                res.redirect('/')
            } else {
                res.redirect('/users/login')
            }
        } else {
            res.redirect('/users/register')
        }
    } catch (error) {
        console.error(error)
        res.status(500).send('Bir hata oluştu')
    }
})

    
    
module.exports=router