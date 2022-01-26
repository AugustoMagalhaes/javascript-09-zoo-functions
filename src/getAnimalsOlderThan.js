const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const getAnimal = (element) => (element.name === animal ? element : false);
  const findAnimal = data.species.find(getAnimal);
  const checkAge = findAnimal.residents.every((specimen) => specimen.age > age);
  return checkAge;
}

module.exports = getAnimalsOlderThan;
