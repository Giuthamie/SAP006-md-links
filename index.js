const chalk = require('chalk')
const fs = require('fs')

console.log(chalk.blue("bin"))
///fs.readFile(file, [encoding], [callback]);
function handleError(error) {
    throw new Error(chalk.red(error.code, 'Não há arquivo no caminho'));
}
function getFile(filePath) {
    const encoding = 'utf-8'
    fs.readFile(filePath, encoding, (error, data) => {
        if (error) {
            handleError(error);
        } console.log(chalk.green(data))
    })
}
getFile('README.md')