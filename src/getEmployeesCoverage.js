const data = require('../data/zoo_data');

const allEmployees = data.employees;
const allSpecies = data.species;

const getAnimalName = (coveredId) => allSpecies.find((animal) => animal.id === coveredId).name;

const getAnimalLocation = (coveredId) => allSpecies.find((animal) =>
  animal.id === coveredId).location;

const singleEmployeeCoverage = (employeeInfo) => {
  const info = Object.values(employeeInfo);
  const findEmployee = allEmployees.find((employee) => Object.values(employee).includes(...info));
  if (!findEmployee) {
    throw new Error('Informações inválidas');
  }
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
    const allEmployeesCoverage = allEmployees.map(singleEmployeeCoverage);
    return allEmployeesCoverage;
  }
  return singleEmployeeCoverage(employeeInfo);
}

module.exports = getEmployeesCoverage;
