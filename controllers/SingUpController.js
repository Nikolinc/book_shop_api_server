'use strict'

const response = require('../response');
const database = require('../settings/database');

exports.SingUp = (req, res) => {
        
    console.log(req.body);


    let user={
        "username": req.body.username,
        "firstname": req.body.firstname,
        "lastname": req.body.lastname,
        "Email": req.body.Email,
        "DateofBirth":req.body.DateofBirth,
        "avatar": req.body.avatar,
        "role": 'polsovatel',
        "Password": req.body.Password,
    }
         
    database.query('INSERT INTO `user` SET ?',user, function(error, results, fields) {
        
        console.log(results)
        console.log(error)
        if(error){
            res.json({
                status:false,
                message:'there are some error with query'
            })
          }else{
              res.json({
                status:true,
                data:results,
                message:'user registered sucessfully'
            })
          }
        });
}
 