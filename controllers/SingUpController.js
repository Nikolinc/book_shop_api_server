'use strict'

const response = require('../response');
const database = require('../settings/database');

exports.SingUp = (req, res) => {
        
    console.log(req.body);


    let user={
        "username":req.body.username,
        "fullname":req.body.fullname,
        "email":req.body.email,
        "password":req.body.password
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
 