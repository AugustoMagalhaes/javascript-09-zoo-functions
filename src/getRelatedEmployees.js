const data = require('../data/zoo_data');

const [stephanieId, olaId, burlId] = ['9e7d4524-363c-416a-8759-8aa7e50c0992',
  'fdb2543b-5662-46a7-badc-93d960fdc0a8',
  '0e7b460e-acf4-4e17-bcb3-ee472265db83'];

function isManager(id) {
  // seu código aqui
  return [stephanieId, olaId, burlId].includes(id);
}

const relatedEmployees = (list, id) => list.reduce((related, employee) => {
  if (employee.managers.includes(id)) {
    related.push(`${employee.firstName} ${employee.lastName}`);
  }
  return related;
}, []);

function getRelatedEmployees(managerId) {
  // seu código aqui
  const employeeList = data.employees;
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return relatedEmployees(employeeList, managerId);
}

module.exports = { isManager, getRelatedEmployees };
