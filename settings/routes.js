'use strict'

module.exports = (app) => {

    const indexController   = require('../controllers/indexController');
    const ProductController = require('../controllers/ProductController');
    const TagFiltres        = require('../controllers/TagFiltres');
    const SliderController  = require('../controllers/SliderController');
    const LoginControler    = require('../controllers/LoginControler');

    app.route('/').get(indexController.index);
    app.route('/product').get(ProductController.product);
    app.route('/tag').get(TagFiltres.TagFiltres);
    app.route('/login').post(LoginControler.Login);
    app.route('/slider').get(SliderController.slider);
}