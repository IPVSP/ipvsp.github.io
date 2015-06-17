var fs = require('fs');
var path = require('path');
var util = require('util');

var files = fs.readdirSync('./cifras');

var json = {results: []};

files.forEach(function(file) {
	var parts = path.basename(file, '.pdf').split('-');
	var musica = null;
	console.log('------------------------------------');
	
	var result = {file: '/cifras/' + file};
	
	if (parts.length == 3) {
		musica = (parts[0].trim().split('(').length > 0) ? parts[0].trim().split('(')[0] : parts[0].trim();
		result.musica = {name: musica};
		result.voz = {name: parts[1].trim()};
		result.tom = {name: parts[2].trim()};
	} else if (parts.length == 2) {
		musica = (parts[0].trim().split('(').length > 0) ? parts[0].trim().split('(')[0] : parts[0].trim();
		result.musica = {name: musica};
		result.tom = {name: parts[1].trim()};
	} else {
		musica = (parts[0].trim().split('(').length > 0) ? parts[0].trim().split('(')[0] : parts[0].trim();
		result.musica = {name: musica};
	}
	
	try {
		if(parts[0].trim().split('(').length > 0) {
			result.autor = {name: parts[0].trim().split('(')[1].split(')')[0]};
		}
	} catch(e) {
	}
	
	console.log('Musica: ' + musica);
	json.results.push(result);
});


// console.log(JSON.stringify(json));

fs.writeFileSync('catalog.json', JSON.stringify(json));
