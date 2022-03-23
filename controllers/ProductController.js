'use strict'

const response = require('../response');
const database = require('../settings/database');

exports.product = (req, res) => {
    database.query('SELECT * FROM `nomenclature`',(error,rows,fields)=> {
        if(error){
             console.error('Error connecting to database')
        }
        else{
            response.status(rows,res)
        }
    })
}