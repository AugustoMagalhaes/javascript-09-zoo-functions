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

const animalArray = (filteredArray, sortBool) => {
  //const result = [];
  const result = filteredArray.reduce((acc, curr) => {
    const foundAnimal = data.species.find((element) => element.name === curr).residents;
    const agora = {};
    agora[curr] = [];
    foundAnimal.forEach((element) => agora[curr].push(element.name));
    if (sortBool === true) {
      agora[curr].sort();
    }
    acc.push(agora);
    //result[curr] = acc;
    return acc;
  }, []);
  return result;
};

const filterAnimalsByName = (sortBool) => {
  const { NE: nEast, NW: nWest, SE: sEast, SW: sWest } = getLocation(data.species);

  return {
    NE: animalArray(nEast, sortBool),
    NW: animalArray(nWest, sortBool),
    SE: animalArray(sEast, sortBool),
    SW: animalArray(sWest, sortBool),
  };
};

function getAnimalMap(options) {
  // seu código aqui
  const dataSpecies = data.species;
  if (!options || !options.includeNames) {
    return getLocation(dataSpecies);
  }
  if (options.includeNames) {
    return filterAnimalsByName(options.sorted);
  }
}

console.log(getAnimalMap({ includeNames: true }));
//getAnimalMap({ includeNames: true });
module.exports = getAnimalMap;
