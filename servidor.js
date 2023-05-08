const serve =require("express");
const app =serve();
const mustache=require("mustache-express")
app.set("view engine","mustache");
app.engine("mustache",mustache);



app.listen(3000,()=>{

console.log("Servidor carregado");


})