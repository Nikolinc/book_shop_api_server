'use strict'

const response = require('../response');
const database = require('../settings/database');

exports.slider = (req, res) => {
    database.query('SELECT * FROM `sliders`',(error,rows,fields)=> {
        if(error){
             console.error('Error connecting to database')
        }
        else{
            response.status(rows,res)
        }
    })
}