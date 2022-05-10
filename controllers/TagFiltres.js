'use strict'

const response = require('../response');
const database = require('../settings/database');

exports.TagFiltres = (req, res) => {
    database.query('SELECT * FROM `tag`',(error,rows,fields)=> {
        if(error){
             console.error('Error connecting to database')
        }
        else{
            response.status(rows,res)
        }
    })
}