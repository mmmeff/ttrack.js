/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('ttrack', { title: 'ttrack.js' });
};