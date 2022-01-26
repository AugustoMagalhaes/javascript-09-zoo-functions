const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const allEmployees = data.employees;
  /* Cheguei a esta ideia aproveitando a lógica de 'destructuring',  embora de maneira 'invertida':
  ao colocar ambas variaveis numa array (que tambem possui o metodo 'includes'), torna-se possível a comparação com 'employeeName' */
  const nameCheck = (employee) => ([employee.firstName, employee.lastName].includes(employeeName));
  const selectedEmployee = allEmployees.find(nameCheck);
  return selectedEmployee;
}

module.exports = getEmployeeByName;
