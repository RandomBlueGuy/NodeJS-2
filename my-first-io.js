const fs = require('fs');
let text = fs.readFile(process.argv[1],"utf8",(err,data)=>{
    console.log(data.split('\n').length);
});