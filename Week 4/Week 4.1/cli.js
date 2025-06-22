// create a nodejs program that lets you read through a file (that it takes as an input) and counts the name


const fs = require("fs");
const {Command} = require('commander');
const { readFile } = require("fs/promises");
const program = new Command();

program
    .name('counter')
    .description('CLI to some JavaScript file')
    .version('0.8.0');

program.command('count')
    .description('count the number of words in a file')
    .argument('<file>', 'file to counter')
    .action((file) => {
            fs.readFile(file, 'utf-8', (err, data) => {
                  if(err){
                console.log(err);
                } else{
                const line = data.split('\n').length;
                console.log(`There are ${line} number of lines in ${file}`);  
                }
            });
        });

program.parse();

// how to run the above? 
/*
1. Open VS Code Terminal
2. Type node cli.js count <file_name>

*/
