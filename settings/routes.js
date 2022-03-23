'use strict'

module.exports = (app) => {

    const indexController = require('../controllers/indexController');
    const ProductController = require('../controllers/ProductController');

    app.route('/').get(indexController.index);
    app.route('/product').get(ProductController.product);

}