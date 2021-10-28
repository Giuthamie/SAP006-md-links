const chalk = require('chalk')
const fs = require('fs')
//const path = require('path')

function getLinks(text) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^*$#\s].[^\s]*)\)/gm;
    const arrayResults = [];
    let temp;
    while ((temp = regex.exec(text)) !== null) {
        arrayResults.push({ [temp[1]]: [temp[2]] })
    }
    return arrayResults.length === 0 ? 'Não há links no arquivo' : arrayResults;
}


function handleError(error) {
    throw new Error(chalk.red(error.code, 'Não há arquivo no caminho'));
}


async function mdLinks(filePath) {
    const enconding = 'utf-8';
    try {
        const text = await fs.promises.readFile(filePath, enconding)
        return getLinks(text);
    } catch (error) {
        handleError(error)
    }
}

/*async function getFile(caminho) {
    const caminhoAbsoluto = path.join(__dirname, '..', caminho);
    const encoding = 'utf-8';
    try {
        const arquivos = await fs.promises.readdir(caminhoAbsoluto, { encoding });
        const result = await Promise.all(arquivos.map(async (arquivo) => {
            const localArquivo = `${caminhoAbsoluto}/${arquivo}`;
            const text = await fs.promises.readFile(localArquivo, encoding);
            return getLinks(text);
        }));
        return result;
    } catch (error) {
        return handleError(error);
    }
}*/

module.exports = mdLinks;

