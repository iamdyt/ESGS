const knexoption = require ('../knexfile');
const knex = require('knex')(knexoption);
module.exports = {
    index:(req,res)=>{
        res.render('admin/registration');
    },

    post:async(req,res)=>{
        const {username, password} = req.body;
        const insert = await knex('admin').insert({
            username, password
        });
        res.redirect('/admin/login');

    },

    login:(req,res)=>{
        res.render('admin/login');
    },

    loginpost:async(req,res)=>{
        const {username, password} = req.body;
        const user = await knex('admin').where('username',username).select('username');
        const pass = await knex('admin').where('password',password).select('password');
       
        if (user[0].username==username && pass[0].password==password){
            req.session.username = username
            res.redirect('/admin/dashboard');
        } else{
            const error = 'username or password incorrect';
            res.redirect('/admin/login')
        }
       
    },
}