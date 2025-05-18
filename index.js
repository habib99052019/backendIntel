const express = require('express')//obligtoir mil module express
var bodyParser = require('body-parser');//yrdha json mhma knyt yli jya
const app = express();//kima hekka express module  le routre

const multer = require('multer');



app.use(express.json({ extended: false, limit: '100mb' }))
app.use(express.urlencoded({ limit: '100mb', extended: false, parameterLimit: 50000 }))
 const connect = require('./dataBase/connect')
//const user=require('./router/userApi')
const landing=require('./routers/landingApi')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
//app.use('/user',user);

app.use('/landing',landing);
// app.use('/uploads', express.static(uploadDirectory));




const port = process.env.PORT || 5900;
app.listen(port,"0.0.0.0",()=>console.log(`Server listen on the port ${port}`)) ;