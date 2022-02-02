const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const employeeList = data.employees;

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const firstAnimalId = employeeList.find((employee) => employee.id === id).responsibleFor[0];
  const firstAnimal = data.species.find((animal) => animal.id === firstAnimalId);
  const oldestAnimalInfo = firstAnimal.residents.reduce((oldest, animal) =>
    (oldest.age > animal.age ? oldest : animal), {});
  const oldestAnimal = Object.values(oldestAnimalInfo);
  return oldestAnimal;
}

console.log(getOldestFromFirstSpecies(stephanieId));
module.exports = getOldestFromFirstSpecies;
