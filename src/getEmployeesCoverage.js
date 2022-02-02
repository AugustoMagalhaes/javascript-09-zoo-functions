const data = require('../data/zoo_data');

const allEmployees = data.employees;
const allSpecies = data.species;

const getAnimalName = (coveredId) => allSpecies.find((animal) => animal.id === coveredId).name;

const getAnimalLocation = (coveredId) => allSpecies.find((animal) =>
  animal.id === coveredId).location;

console.log(getAnimalLocation('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'));

const findEmployeeCoverage = (employeeInfo) => {
  const info = Object.values(employeeInfo);
  const findEmployee = allEmployees.find((employee) => Object.values(employee).includes(...info));
  return {
    id: `${findEmployee.id}`,
    fullName: `${findEmployee.firstName} ${findEmployee.lastName}`,
    species: findEmployee.responsibleFor.map(getAnimalName),
    locations: findEmployee.responsibleFor.map(getAnimalLocation),
  };
};

function getEmployeesCoverage(employeeInfo) {
  // seu código aqui
  if (!employeeInfo) {
    const allEmployeesCoverage = allEmployees.map(findEmployeeCoverage);
    return allEmployeesCoverage;
  }
  return findEmployeeCoverage(employeeInfo);
}

console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
