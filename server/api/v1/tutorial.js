var express = require('express');
var router = express.Router();
var rp = require('request-promise');
const GITHUB_URL = 'https://api.github.com/repos/Dcorkran/js-game-tutorials/contents/tutorial-markdowns';
const marked = require('marked');
const cheerioFunctions = require('../cheerio-functions/cheerio-functions')



/* GET home page. */
router.get('/:name', function(req, res, next) {

  var options = {
    uri: `${GITHUB_URL}/${req.params.name}.md`,
    headers: {
      'Accept': 'application/vnd.github.VERSION.raw',
      'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
  };


  rp(options)
      .then(function (repos) {
        // console.log(repos);
        // console.log('User has %d repos', repos.length);
        cheerioFunctions.parseMarkdown(repos);
        console.log(marked(repos));
        res.json(repos);
      })
      .catch(function (err) {
        res.json("boo");
          // API call failed...
      });
});

module.exports = router;
