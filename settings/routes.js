'use strict'

module.exports = (app) => {

    const indexController   = require('../controllers/indexController');
    const ProductController = require('../controllers/ProductController');
    const TagFiltres        = require('../controllers/TagFiltres');
    const SliderController  = require('../controllers/SliderController');
    const LoginControler    = require('../controllers/LoginControler');
    const SingUpControler   = require('../controllers/SingUpController');

    app.route('/').get(indexController.index);
    app.route('/product').get(ProductController.product);
    app.route('/tag').get(TagFiltres.TagFiltres);
    app.route('/login').post(LoginControler.login);
    app.route('/slider').get(SliderController.slider);
    app.route('/singUp').post(SingUpControler.SingUp)
}