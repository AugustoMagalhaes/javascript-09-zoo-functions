const data = require('../data/zoo_data');

const genericReduce = (list) => {
  let obj2 = list;
  return obj2.reduce((obj, animal) => {
    obj = {animal.name : animal.residents.length};
    return obj;
  }, {});
};

function countAnimals(animal) {
  // seu código aqui
  const animalsList = data.species;
  if (!animal) {
    return genericReduce(animalsList);
  }
}

console.log(countAnimals());

module.exports = countAnimals;
