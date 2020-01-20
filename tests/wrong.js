var express = require('express');
var router=express.Router()

// router.get('/*', (req, res) => {
//   res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
// });
router.get('/',function(req,res){
 res.render('v1/index')
});
router.get('*',function (req,res)
{
  // console.log(req)
  res.render('v1' + req.url)
});

module.exports = router;
