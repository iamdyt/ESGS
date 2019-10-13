module.exports = {
    isAdmin:(req,res,next)=>{
        if(!req.session.username){
            res.redirect('/admin/login')
        }
        next();
    },

    isLoggedIn:(req,res,next)=>{
        if(req.session.username){
            res.redirect('/admin/dashboard')
        }
        next()
    }
}