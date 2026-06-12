var slugify = require('slugify');

slugify('some string')

//if prefer something other than '-' as separator
const b = slugify('some string', '_') //some_string 
console.log(b)  