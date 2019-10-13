const knexoption = require ('../knexfile');
const knex = require('knex')(knexoption);
module.exports = {
    index:(req,res)=>{
        res.render('dashboard/index');
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
        const user = await knex('admin').select('username');
        const pass = await knex('admin').select('password');
        if (user==username && pass==password){
            req.session.username = user
            
        } else{
            const error = 'username or password incorrect';
        }
        res.redirect('/dashboard');
    },
}