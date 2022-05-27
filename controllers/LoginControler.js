'use strict'

const response = require('../response');
const database = require('../settings/database');

exports.login = (req, res) => {
        
    let Email = req.body.Email;
    let password = req.body.password;
    console.log(req.body);
    console.log(password);
     if (Email && password) {
         
          database.query('SELECT * FROM `user` WHERE Email = ? AND password = ?', [Email, password], function(error, results, fields) {
             
             if (error) throw error;
             
             if (results.length > 0) {
                
                //req.session.loggedin = true;
               // req.session.username = username; 
               response.status(results,res)
             } else {
               response.send('Incorrect Username and/or Password!');
             }			
             response.end();
         });
     } else {
      response.send('Please enter Username and Password!');
      response.end();
     }
 };