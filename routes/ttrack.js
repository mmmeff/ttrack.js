/*
 * GET ttrack.js pages
 */

exports.index = function(req, res){
  res.render('ttrack', { title: 'ttrack.js' });
};