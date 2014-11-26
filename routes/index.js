/*
 * GET home page.
 */
exports.index = function(req, res){
	res.render('index');
};

exports.notfound = function(req, res){
  res.render('404');
};

exports.android = function(req, res){
  res.render('android');
};

exports.dotnet = function(req, res){
  res.render('dotnet');
};

exports.oraclemanager = function(req, res){
  res.render('oraclemanager');
};

exports.webDotNet = function(req, res){
  res.render('web');
};

exports.web = function(req, res){
  res.render('web2');
};

exports.listStudents = function(req, res){
  res.send({students: [{id: 1, name: 'Fulano'},{id: 2, name: 'Sultano'},{id: 3, name: 'Pepito'}]});
};

exports.addStudent = function(req, res){
  console.log(req.body);
  res.send({message: 'Estudiante '+ req.body.student +' agregado.'});
};
