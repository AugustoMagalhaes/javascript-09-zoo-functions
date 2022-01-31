const data = require('../data/zoo_data');

const getLocation = (list) => {
  const obj = {};
  ['NE', 'NW', 'SE', 'SW'].forEach((locationX) => {
    obj[locationX] = [];
    list.forEach((element) => {
      if (element.location === locationX) {
        obj[locationX].push(element.name);
      }
    });
  });
  return obj;
};

console.log(getLocation(data.species));
function getAnimalMap(options) {
  // seu código aqui
  const dataSpecies = data.species;
  if (!options || !options.includeNames) {
    return getLocation(dataSpecies);
  }
}

module.exports = getAnimalMap;
