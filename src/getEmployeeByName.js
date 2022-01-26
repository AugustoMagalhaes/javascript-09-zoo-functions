const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const allEmployees = data.employees;
  /* Após muitas tentativas de reduzir o tamanho da linha seguinte, cheguei a esta ideia aproveitando a lógica de 'destructuring',
  embora de maneira 'invertida' */
  const nameCheck = (employee) => ([employee.firstName, employee.lastName].includes(employeeName));
  const selectedEmployee = allEmployees.find(nameCheck);
  return selectedEmployee;
}

module.exports = getEmployeeByName;
