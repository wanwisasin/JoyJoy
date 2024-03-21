const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/db');


const {getCategoryPage,addCategoryPage , addCategory,deleteCategory,editCategory,editCategoryPage } = require('./backend/model/category');

const {getProductPage,addProductPage , addProduct,deleteProduct,editProduct,editProductPage } = require('./backend/model/product');

const app = express();
const port = 2000;



app.set('port', process.env.PORT || port);
app.set('views', 'backend/views'); 
app.set('view engine', 'ejs'); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(fileUpload()); 

app.get('/', (req, res) => {
    res.render('adminPage', { title: 'Admin Page' });
});

//product
app.get('/productPage', getProductPage);
app.get('/add/products',addProductPage);
app.get('/edit/products/:id',editProductPage);
app.get('/delete/products/:id',deleteProduct);
app.post('/add/products',addProduct);
app.post('/edit/products/:id',editProduct);

//categorise
app.get('/categoryPage', getCategoryPage);
app.get('/add/categories',addCategoryPage);
app.get('/edit/categories/:id',editCategoryPage);
app.get('/delete/categories/:id',deleteCategory);
app.post('/add/categories',addCategory);
app.post('/edit/categories/:id',editCategory);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});