const cheerio = require('cheerio')

module.exports = {
  parseMarkdown: function(md){
    let $ = cheerio.load(md);
    console.log($('span'));
  }
};
