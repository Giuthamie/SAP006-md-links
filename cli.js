const chalk = require('chalk');
const mdLinks = require('./index');
const validateLinks = require('./validation');

const road = process.argv;

async function processingText(pathFile) {
    const results = await mdLinks(pathFile[2]);
    if(road[3] === 'validar'){
        console.log(chalk.yellow('links validados'), validateLinks(results));

    } else {
        console.log(chalk.yellow('listagem de links'), results);
    }
    
}

processingText(road);