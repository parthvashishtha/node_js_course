const path = require('path');

const a = path.basename('C:\\temp\\myfile.html');  //Basename gives the filename portion of a path to the file
const a1 = path.dirname('C:\\temp\\myfile.html');
console.log(a);
console.log(a1);

const b = path.extname(__filename);  // It gives the extension of file i.e js
console.log(b);
console.log(__filename);