const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', (req,res)=>{
   res.render('index')
})

app.get('/about', (req,res)=>{
    res.render('about')
 })

 app.get('/service', (req,res)=>{
    res.render('service')
 })

 app.get('/blog', (req,res)=>{
    res.render('blog')
 })

 app.get('/contact', (req,res)=>{
    res.render('contact')
 })

 app.post('/contact', (req,res)=>{
   console.log(JSON.stringify(req.body));
   res.render('contact')
})

app.listen(5000,()=>{
    console.log('app runing on port 5000');
    console.log('http://localhost:5000');
})
