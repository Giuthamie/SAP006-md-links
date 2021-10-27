//const fetch = require('node-fetch');

function creatArrLinks(arrLinks) {
    return arrLinks.map(objectLink => Object.values(objectLink).join())
}

function validateLinks(arrLinks) {
return creatArrLinks(arrLinks);
}

module.exports = validateLinks;