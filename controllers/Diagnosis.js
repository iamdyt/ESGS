const knexoption = require ('../knexfile');
const knex = require('knex')(knexoption);

module.exports = {
    index: async (req,res)=>{
        const questions = await knex('questions').where('Type','Gonorrhea').select('*');
        res.render('diagnosis/index', {questions});
    },

    diagnose:(req,res)=>{
        const params = req.body.answer;
        if (params.length<4){
            const text = "You do not have Gonorrhea";
            res.render('diagnosis/result', {text});
        }
        else if (params.length < 7){
            const text = "You show Signs of Early Gonorrhea";
            res.render('diagnosis/result', {text});
        }
        
        else{
            const text = "You have been infected with Gonorrea";
            res.render('diagnosis/result', {text});
        }
    }
}