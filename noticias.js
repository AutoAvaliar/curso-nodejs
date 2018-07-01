var http = require('http');

var server = http.createServer(function(req,res){

	var categoria = req.url;
	if(categoria == '/tech'){
		res.end('<html><body>Tech - Noticias</body></html>');
	}
	else if(categoria == '/contato'){
		res.end('<html><body>Contato</body></html>');
	}
	else{
		res.end('<html><body>Portal de Noticias</body></html>');
	}

}).listen(3000);

//console.log('Teste Node JS');