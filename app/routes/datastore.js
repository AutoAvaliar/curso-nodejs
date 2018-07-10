var dbConnection = require('../../config/dbConnection');

module.exports = function(app){
	app.get('/datastore', function(req,res){

		var connection = dbConnection();

		// Imports the Google Cloud client library
		const Datastore = require('@google-cloud/datastore');

		// Your Google Cloud Platform project ID
		const projectId = 'autoavaliar-b2b';

		// Creates a client
		const datastore = new Datastore({
		  projectId: projectId,
		});

		// The kind for the new entity
		const kind = 'Task';
		// The name/ID for the new entity
		const name = 'sampletask1';
		// The Cloud Datastore key for the new entity
		const taskKey = datastore.key([kind, name]);

		// Prepares the new entity
		const task1 = {
		  key: taskKey,
		  data: {
		    description: 'My New Task',
		  },
		};

		//Search Data
		var queryString = 'SELECT id,titulo,noticia,data_criacao FROM noticias ORDER BY id';

		connection.query(queryString, function(err, rows, fields) {
		    if (err) throw err;
		 
		    for (var i in rows) {
		        //console.log('Post Titles: ', rows[i].id);
		        var task = {
				  key: datastore.key([kind, rows[i].id]),
				  data: {
				    id: rows[i].id,
				    description: rows[i].noticia,
				    datetime: rows[i].data_criacao
				  },
				}
				//Saves the entity
				datastore
				  .save(task)
				  .then(() => {
				    console.log(`Saved ${task.key.name}: ${task.data.description}`);
				  })
				  .catch(err => {
				    console.error('ERROR:', err);
				  });
		    }
		});

		res.send('...registro no datastore incluido...');
	});
};