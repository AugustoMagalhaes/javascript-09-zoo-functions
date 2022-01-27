const data = require('../data/zoo_data');

const genericReduce = (list) => {
  const reducer = list.reduce((animalObject, currentAnimal) => {
    const obj = animalObject; // lint dizia que não se pode reatribuir parametro, apesar de ser um reduce...
    obj[currentAnimal.name] = currentAnimal.residents.length;
    return obj;
  }, {});
  return reducer;
};

function countAnimals(animal) {
  // seu código aqui
  const animalsList = data.species;
  if (!animal) {
    return genericReduce(animalsList);
  }
}

module.exports = countAnimals;
