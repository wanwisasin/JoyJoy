module.exports = {
    getCategoryPage: function(req, res) {
        db.query('SELECT * FROM categories', (err, results) => {
            if (err) throw err;
            const categories = results;
            res.render('categoryPage', { categories: categories });
        });
    },
    addCategoryPage: function(req, res) {
        res.render('add-category.ejs', {
            title: " Add a new Category",
            message: ''
        });
    },
    addCategory: function(req, res) {
        let categoryId = req.body.category_id;
        let categoryName = req.body.category_name;
        let query = "INSERT INTO categories (category_id, category_name) VALUES (?, ?)";
        db.query(query, [categoryId, categoryName], (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/categoryPage');
        });
    },
    editCategoryPage: function(req, res) {
        let categoryId = req.params.id;
        let query = "SELECT * FROM categories WHERE category_id = ?";
        db.query(query, [categoryId], (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('edit-category.ejs', {
                title: "Edit Category",
                categories: result, 
                message: ''
            });
        });
    },
    editCategory: function(req, res) {
        let categoryId = req.params.id;
        let categoryName = req.body.category_name;
        let query = "UPDATE `categories` SET `category_name` = '"+categoryName+"' WHERE `category_id` = '"+categoryId+"'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/categoryPage');
        });
    },
    
    deleteCategory: function(req, res) {
        let categoryId = req.params.id;
        let deleteCategoryQuery = 'DELETE FROM categories WHERE category_id = "'+categoryId+'"';
        db.query(deleteCategoryQuery, [categoryId], (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/categoryPage');
        });
    }
};
