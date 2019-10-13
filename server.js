const express = require('express');
const morgan = require('morgan');
const session = require('express-session')
const path = require('path');
const knexoption = require ('./knexfile');
const knex = require('knex')(knexoption);
const sessionStore = require('express-mysql-session')(session);
const app = express();
const routes = require('./routes/router');
const PORT =  process.env.PORT || 5000;
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'hsg792-ksnd05%',
    store: new sessionStore({
       ...knexoption.connection
   })
}))

app.use('/', routes)
app.listen(PORT, ()=>{
    console.log("Server Started @ "+PORT)
});
