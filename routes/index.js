/*
 * GET home page.
 */
exports.index = function(req, res){
	res.render('index');
};

exports.notfound = function(req, res){
	res.render('404');
};