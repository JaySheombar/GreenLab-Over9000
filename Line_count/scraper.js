console.log("Argument: "+process.argv[2]);

var webpage = process.argv[2];
var dir = webpage.replace(/\//g,"_");

console.log("directory: "+dir);

const scrape = require('website-scraper');
const options = {
  urls: [process.argv[2]],
  directory: "./"+dir,
};

// with promise
scrape(options).then((result) => {
  console.log(webpage + "Properly downloaded");
	/* some code here */
}).catch((err) => {
  console.log(webpage + "There was an error",err);
	/* some code here */
});
