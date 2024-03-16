const mongoose = require('mongoose')
const Post=require('./models/post')
const post = require('./models/post')

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'))


//silme işlemi
/*Post.findByIdAndDelete('65f57178bb1177b57ba575b7')
.then(post => {
  console.log(post);
})
.catch(err => {
  console.error(err);
})*/

//uptade komutu ama ıd ye göre bulup değiştridim
/*Post.findByIdAndUpdate('65f57178bb1177b57ba575b7',{
  title:'2.ye değiştirdim hahaha'
}).then(post => {
  console.log(post);
})
.catch(err => {
  console.error(err);
})*/


//id ile getirme
/*Post.findById('65f57178bb1177b57ba575b7',)
.then(post => {
  console.log(post);
})
.catch(err => {
  console.error(err);
})*/
 

//post bulma methodu  *eğer find komutunun içine bir şey yazmazsam tüm postlar döner
/*Post.find({
  title:'Benim ikinci Post Başlığım.'
}).then(post => {
  console.log(post);
})
.catch(err => {
  console.error(err);
})*/


//post oluşturma methodu 
Post.create({
    title: 'Benim ikinci Post Başlığım.',
    content: 'Post içeriği ama ikinci  bu, lorem ipsum.'
}).then(post => {
    console.log(post);
  })
  .catch(err => {
    console.error(err);
  })
