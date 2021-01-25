
/*
 * GET home page.
 */

exports.view = function(req, res){
  // get name from the URL using variable userName
  var nameToShow = req.params.userName;
  if (nameToShow === undefined) {
    nameToShow = 'World';
  }
  console.log("Name is " + nameToShow);
  // insert variables into HTML template
  res.render('index', {
  	'name': nameToShow,
  });
};
