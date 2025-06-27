const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
    .name('space-count')
    .description('CLI to some JavaScript count utilities')
    .version('0.8.0')

program.command('space')
    .description('count the number of space and display as a number')
    .argument('<file>', 'file to count space')
    .action((file) => {
        fs.readFile(file, 'utf-8', function(err, data){
            if(err){
                console.log(`Error is ${err}`);
            } else {
                let total = 0;
                for(let i = 0; i < data.length; i++){
                    if(data[i] === " ") {
                        total++;
                    }
                }
                console.log(total);
            }
        })
    })

program.parse();