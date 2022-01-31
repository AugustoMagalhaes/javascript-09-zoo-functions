const data = require('../data/zoo_data');

const getLocation = (list) => {
  const animalLocations = {};
  ['NE', 'NW', 'SE', 'SW'].forEach((singleLocation) => {
    animalLocations[singleLocation] = [];
    list.forEach((element) => {
      if (element.location === singleLocation) {
        animalLocations[singleLocation].push(element.name);
      }
    });
  });
  return animalLocations;
};

const animalArray = (filteredArray, options) => {
  const result = filteredArray.reduce((acc, curr) => {
    let foundAnimal = data.species.find((element) => element.name === curr).residents;
    const animalObject = {};
    animalObject[curr] = [];
    if (options.sex) {
      foundAnimal = foundAnimal.filter((animal) => animal.sex === options.sex);
    }
    foundAnimal.forEach((element) => animalObject[curr].push(element.name));
    if (options.sorted === true) {
      animalObject[curr].sort();
    }
    acc.push(animalObject);
    return acc;
  }, []);
  return result;
};

const filterAnimalsByName = (options) => {
  const { NE: nEast, NW: nWest, SE: sEast, SW: sWest } = getLocation(data.species);

  return {
    NE: animalArray(nEast, options),
    NW: animalArray(nWest, options),
    SE: animalArray(sEast, options),
    SW: animalArray(sWest, options),
  };
};

function getAnimalMap(options) {
  // seu código aqui
  const dataSpecies = data.species;
  if (!options || !options.includeNames) {
    return getLocation(dataSpecies);
  }
  if (options.includeNames) {
    return filterAnimalsByName(options);
  }
}

module.exports = getAnimalMap;
