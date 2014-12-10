var products = ['Albaricoque', 'Cereza', 'Ciruela', 'Higo', 'Kaki', 'Manzana', 'Melocotón', 'Nectarina', 'Níspero', 'Pera', 'Uva', 'Aguacate', 'Carambola', 'Coco', 'Chirimoya', 'Dátil', 'Kiwi', 'Litchi', 'Mango', 'Papaya', 'Piña', 'Plátano'];

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

exports.getproducts = function(req, res){
  console.log(req.query.name);
  if (req.query.name) {
    res.json(searchStringInArray(req.query.name, products));
  }else{
    res.json(products.sort());
  };

  function searchStringInArray (str, strArray) {
    var matches = [];
    for (var i = strArray.length - 1; i >= 0; i--) {     
      if (strArray[i].toUpperCase().match(str.toUpperCase())) {
        matches.push(strArray[i]);
      };
    }
    return matches.sort();
  }  
};

exports.postproducts = function(req, res){
  console.log(req.body.name);
  if (req.body.name) {
    products.push(req.body.name);
    res.send('Producto agregado.');
  }else{
    res.send('Parámetros incorrectos.');
  };
};







exports.listStudents = function(req, res){
  res.send({students: [{id: 1, name: 'Fulano'},{id: 2, name: 'Sultano'},{id: 3, name: 'Pepito'}]});
};

exports.addStudent = function(req, res){
  console.log(req.body);
  res.send({message: 'Estudiante '+ req.body.student +' agregado.'});
};
