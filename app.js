const http = require('http');
const bodyParser=require('body-parser');

const express = require('express');
const { resolveSoa } = require('dns');
const { redirect } = require('express/lib/response');

const app = express();

app.use(bodyParser.urlencoded({extended:false}))


app.use('/add-product', (req, res, next) => {
    console.log('in the another middle');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="title"><button type="submit">add</button></form>')
})

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})
app.use('/', (req, res, next) => {
    res.send('<h2>hello form express!</h2>');
})

app.listen(1000);
