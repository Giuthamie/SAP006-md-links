const fetch = require('node-fetch');

function handleErr(error) {
    throw new Error(error.message);
}

async function checkStatus(arrUrls) {
    try {
      const arrayStatus = await Promise
        .all(arrUrls
          .map(async url => {
            const res = await fetch(url)
            return res.status;
      }))
      return arrayStatus;
    } catch(error) {
      handleErr(error);
    }
  
}

function creatArrLinks(arrLinks) {
    return arrLinks
        .map(objectLink => Object
            .values(objectLink).join())
}

async function validateLinks(arrLinks) {
    const links = creatArrLinks(arrLinks);
    const statusLinks = await checkStatus(links);

    const results = arrLinks.map((object, index) => ({
    ...object,
    status: statusLinks[index]
  }))
  return results;
}

module.exports = validateLinks;