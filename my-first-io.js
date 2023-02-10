const fs = require('fs');
const buff = fs.readFileSync(process.argv[2],"utf8",(err,data)=>{
    if (err){
        return console.log(err)
    }
    console.log(data.split('\n').length);
});

const str = buff.split('\n').length -1;
console.log(str);