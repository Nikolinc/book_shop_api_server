'use strict'

exports.status = (value,res)=>{
    const data = {
        "values":value    
    }

    res.json(data)
    res.end()

}