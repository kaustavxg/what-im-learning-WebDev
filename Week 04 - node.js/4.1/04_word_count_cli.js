// =============== CREATING MY OWN CLI =================

/*
 * CLI Word Count Tool
 * -------------------
 * A command-line utility to count lines in text files
 * 
 * SETUP:
 * 1. Install dependencies:
 *    npm install commander
 * 
 * 2. Make sure you have a text file to test with
 * 
 * USAGE:
 * Open your terminal and run:
 *    node 04_Word_count_cli.js count <filename>
 * 
 * EXAMPLES:
 *    node 04_Word_count_cli.js count sample.txt
 *    node 04_Word_count_cli.js count data/myfile.txt
 *    node 04_Word_count_cli.js --help
 * 
 * FEATURES:
 * - Counts total lines in any text file
 * - Built-in help and version commands
 * - Error handling for missing files
 * 
 * SOURCE:
 * - https://www.npmjs.com/package/commander#commanderjs
 */

const fs = require('fs');
const { Command } = require('commander');
const program = new Command();



program
    .name('count-string')
    .description('CLI to some JavaScript count utilities')
    .version('0.8.0')

program.command('count')
    .description('count the number of words and display as a number')
    .argument('<file>', 'file to count')
    .action((file) => {
        fs.readFile(file, 'utf-8', function(err, data){
            if(err){
                console.log(`Error is: ${err}`);
            } else {
                const lines = data.split('\n').length;
                console.log(`Number of lines for the given file are: ${lines}`); 
            }
        })
    })

program.parse();