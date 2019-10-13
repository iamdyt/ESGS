const knexoption = require ('../knexfile');
const knex = require('knex')(knexoption);
module.exports = {
    index:async(req,res)=>{
        const symptoms = await knex('questions').where('Type','Gonorrhea').select('*')
        res.render('dashboard/index',{symptoms});
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
        res.redirect('/admin/login');
    },
    appointmentall:async(req,res)=>{
        const appointments = await knex('appointment').select('*');
        res.render('dashboard/appointment',{appointments})
    },

    appointmentdelete:async(req,res)=>{
        const {id} = req.params;
        const appointments = await knex('appointment').where('SN',id).delete()
        res.redirect('/dashboard/appointment')
    },
    sympedit: async(req,res)=>{
        const {id} = req.params;
        const symptoms = await knex('questions').where('SN',id).select('*');
        const symptom = symptoms[0];
        res.render('dashboard/symptomsedit',{symptom})
    },

    sympupdate: async(req,res)=>{
        const {id} = req.params;
        const {symp,type} = req.body;
        const symptoms = await knex('questions').where('SN',id).update(
            {'Question':symp,
            'Type':type
        });
        res.redirect('/admin/dashboard')
    },
    sympdelete: async(req,res)=>{
        const {id} = req.params;
        const destroy = await knex('questions').where('SN',id).delete();
        res.redirect('/admin/dashboard')
    },

    show:async(req,res)=>{
        res.render('dashboard/symptoms')
    },
    store:async(req,res)=>{
        const {symp, type} = req.body;
        const insert = await knex('questions').insert({'Question':symp,'Type':type})
        res.redirect('/admin/dashboard')
    },
}