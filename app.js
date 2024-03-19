const express = require('express')
const app = express();
const path = require('path');
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res) => {
    res.render('home');
})

app.get('/home',(req,res) => {
    res.render('home');
})
app.get('/FigurePage',(req,res) => {
    res.render('FigurePage');
})
app.get('/legoPage',(req,res) => {
    res.render('legoPage');
})
app.get('/PlushToyPage',(req,res) => {
    res.render('PlushToyPage');
})
app.get('/boardgamePage',(req,res) => {
    res.render('boardgamePage');
})
app.get('/ToyCarPage',(req,res) => {
    res.render('ToyCarPage');
})

app.listen(port, () => {
    console.log(`Server is running on Port ${port}.`);
});