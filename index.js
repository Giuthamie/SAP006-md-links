const chalk = require('chalk')
const fs = require('fs')

console.log(chalk.blue("bin"))
///fs.readFile(file, [encoding], [callback]);
function handleError(error) {
    throw new Error(chalk.red(error.code, 'Não há arquivo no caminho'));
}

async function getFile(filePath) {
    const enconding = 'utf-8';
    try {
    const text = await fs.promises.readFile(filePath, enconding)
    console.log(chalk.green(text))
} catch(error){
    handleError(error)
}
}


getFile('./files/teste.md')