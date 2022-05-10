'use strict'

module.exports = (app) => {

    const indexController = require('../controllers/indexController');
    const ProductController = require('../controllers/ProductController');
    const TagFiltres = require('../controllers/TagFiltres');
    const SliderController = require('../controllers/SliderController');

    app.route('/').get(indexController.index);
    app.route('/product').get(ProductController.product);
    app.route('/tag').get(TagFiltres.TagFiltres);
    app.route('/slider').get(SliderController.slider);
}