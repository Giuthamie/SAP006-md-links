const chalk = require('chalk')
const fs = require('fs')

function getLinks(text) {
    const regex =  /\[([^\]]*)\]\((https?:\/\/[^*$#\s].[^\s]*)\)/gm;
    const arrayResults = [];
    let temp;
    while((temp = regex.exec(text)) !== null){
        arrayResults.push({ [temp[1]]: [temp[2]] })
    }
    return arrayResults;
   }
   

///fs.readFile(file, [encoding], [callback]);
function handleError(error) {
    throw new Error(chalk.red(error.code, 'Não há arquivo no caminho'));
}

async function getFile(filePath) {
    const enconding = 'utf-8';
    try {
    const text = await fs.promises.readFile(filePath, enconding)
    console.log(getLinks(text))
} catch(error){
    handleError(error)
}
}



getFile('./files/teste.md')