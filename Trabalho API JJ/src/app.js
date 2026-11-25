const express=require('express');
const cors=require('cors');
const usuarioRoutes=require('./routes/usuarioRoutes');
const app=express();
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>res.status(200).json({mensagem:'API MVC PW3 funcionando!'}));
app.use('/usuarios',usuarioRoutes);
module.exports=app;
