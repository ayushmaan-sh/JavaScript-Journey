
/*

{
  "name": "nodejs",   -> Name of your website/app/library
  "version": "1.0.0", -> current version - MAJOR.MINOR.PATCH
  "main": "node.js",  -> Entrypoint
  "scripts": {  -> Dev specified scripts
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "keywords": [],---------|
  "author": "",-----------|---->Metadata
  "license": "ISC",-------|
  "type": "commonjs"------|
}



NPM -> Node Package Manager (Maintaing packages of node libraries and dependencies)


*/


//internal packages

const fs = require('fs')

fs.readFile('./text.txt', 'utf-8', (err, data)=>{
  if(err){
    console.log(err);
  } else {
    console.log(data);
  }
})

const path = require('path')
console.log(__dirname);
