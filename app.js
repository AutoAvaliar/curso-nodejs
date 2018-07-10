//Config
var app 						= require('./config/server');

//Routes
var rotaHome 					= require('./app/routes/home')(app);
var rotaNoticicas 				= require('./app/routes/noticias')(app);
var rotaFormularioAddNoticia 	= require('./app/routes/formulario_inclusao_noticia')(app);
var datastore					= require('./app/routes/datastore')(app);
var chaordic					= require('./app/routes/chaordic')(app);

//Port
app.listen(3000, function(){
	console.log('Server ON');
});