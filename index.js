const express = require('express');
const bodyParser=require('body-parser');
const config=require('./config');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('views engine','ejs');
const arr=["Hello!!!!",'world','test'];
app.get('/', (req, res) => res.render('index.ejs',{arr:arr}));
app.get('/create', (req, res) => res.render('create.ejs'));
app.post('/create', (req, res) => {
    arr.push(req.body.text);
    res.redirect('/')
});
app.listen(config.PORT, () =>
    console.log(`Example app listening on port ${config.PORT}!`));