const knexoption = require ('../knexfile');
const knex = require('knex')(knexoption);
module.exports = {
    index:(req,res)=>{
        res.render('appointment/index');
    },

    post:async(req,res)=>{
        const {name, email, message} = req.body;
        const insert = await knex('appointment').insert({
            name,email,message
        });
        res.redirect('/');

    }

}