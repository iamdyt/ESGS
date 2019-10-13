const knexoption = require ('../knexfile');
const knex = require('knex')(knexoption);

module.exports = {
    index: async (req,res)=>{
        const questions = await knex('questions').where('Type','Gonorrhea').select('*');
        res.render('diagnosis/index', {questions});
    },

    diagnose:(req,res)=>{
        const params = req.body.answer;
        if (params){
            if (params.length<4){
                const text = `
                <p class='text-nurse-blue text-justify'>You do not show sign of<strong> GONORRHEA INFECTION</strong>
                However, your stated symptoms may be as result of another STI (SEXUAL TRANSMITTED INFECTION) kindly meet <strong>A QUALIFIED PHYSICIAN</strong> with explanation of your <strong> SYMPTOMS. </strong> </p>
            ` 
                res.render('diagnosis/result', {text});
            }
            else if (params.length < 7){
                const text = `
                    <p class=' text-nurse-blue text-justify'>You show signs of <strong> EARLY GONORRHEA</strong>
                    ensure you arrange a meeting with your DOCTOR for further clinical diagnosis
                    You can also meet <strong>A QUALIFIED PHARMACIST</strong> with explanation of your <strong> SYMPTOMS. </strong> </p>
                ` 
                res.render('diagnosis/result', {text});
            }
            
            else{
                const text = `
                <p class='text-nurse-blue text-justify'>You show signs of <strong> GONORRHEA INFECTION</strong>
                ensure you arrange a meeting with your DOCTOR for further clinical diagnosis
                You can also meet <strong>A QUALIFIED PHARMACIST</strong> with explanation of your <strong> SYMPTOMS. </strong> </p>
            ` 
                res.render('diagnosis/result', {text});
            }
        } else{
            const text = `
            <p class='text-nurse-blue text-justify'> System can only if and only if you choose related symptoms you experience,
            kindly go back to choose perceived symptoms.</p>
        ` 
            res.render('diagnosis/result', {text});
        }
        
    }
}