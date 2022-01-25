const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  const dataSpecies = data.species;
  const selected = dataSpecies.filter((element) => (ids.includes(element.id) ? element : false));
  return selected;
}

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;
