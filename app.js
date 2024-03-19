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
app.get('/NewArrPage',(req,res) => {
    res.render('NewArrPage');
})
app.get('/BestSellers',(req,res) => {
    res.render('BestSellers');
})
app.get('/UpcomPage',(req,res) => {
    res.render('UpcomPage');
})
app.get('/OnlyJoyPage',(req,res) => {
    res.render('OnlyJoyPage');
})
app.get('/brandBanpresto',(req,res) => {
    res.render('brandBanpresto');
})
app.get('/brandCare',(req,res) => {
    res.render('brandCare');
})
app.get('/brandLego',(req,res) => {
    res.render('brandLego');
})
app.get('/SaleBoard',(req,res) => {
    res.render('SaleBoard');
})
app.get('/SaleFigure',(req,res) => {
    res.render('SaleFigure');
})
app.get('/SaleLEGO',(req,res) => {
    res.render('SaleLEGO');
})
app.get('/SalePlush',(req,res) => {
    res.render('SalePlush');
})
app.get('/Saletoycar',(req,res) => {
    res.render('Saletoycar');
})

app.listen(port, () => {
    console.log(`Server is running on Port ${port}.`);
});