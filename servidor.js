//Importar o express com o intuito de criar um servidor para aplicação
const serve =require("express")
const app =serve();

//Importar o body-parser para ser possivel fazer a funcionalidade de login
const bodyparser=require("body-parser")

//Importar uma sessão para o login
const session = require("express-session")

//Esse número representa a porta de entrada do nosso aplicativo,isto é,localhost:8080
const port =8080

//Importar o path para encontrar o caminho da pagina feita em ejs
const path = require("path");

//O segredo da sessão criada
app.use(session({secret:'43dwdr354t4g'}))

//Permitir que o body parser pegue os dados submitidos
app.use(bodyparser.urlencoded({extended:true}))

//Importar o ejs como template e localiza-los na pasta views
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));

//Uma conta exemplo
var login="motorista";
var senha ="123";



// Login
app.post('/',(req,res)=>{
 console.log(req.body.login);
 if(req.body.password == senha && req.body.login == login){
 req.session.login= login;
res.render('logado');

 }else{
    res.render('index');
 }})

app.get('/',(req,res)=>{

    if(req.session.login){
    
        res.render('logado')
    }else{

        res.render('index'); 
    }

    
})

//Logado

/*app.post('/logado',(req,res)=>{

    if(req.body.button==true){

        req.session.button=button
        res.redirect('/')
    }else{
        res.render("logado")
    }})*/


app.get('/logado',(req,res)=>{
if(req.session.button){
res.redirect('/')

}else{

    res.render("logado");
}

})

// Pagina não encontrada


app.use((req,res)=>{
res.status(404).send("Página não Encontrada")
    
}

)

//Local para abrir o codigo no localhost
app.listen(port,()=>{

console.log("Servidor carregado");


})