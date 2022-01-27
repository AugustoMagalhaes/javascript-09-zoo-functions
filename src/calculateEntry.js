const data = require('../data/zoo_data');

const entrantsByAge = (list) => {
  const fakeObj = { child: 0, adult: 0, senior: 0 };
  const reducer = list.reduce((acc, curr) => {
    let key = '';
    key = (curr.age >= 50) ? 'senior' : 'child';
    if (curr.age >= 18 && curr.age < 50) {
      key = 'adult';
    }
    fakeObj[key] += 1;
    return fakeObj;
  }, fakeObj);
  return reducer;
};

function countEntrants(entrants) {
  // seu código aqui
  return entrantsByAge(entrants);
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }
  const dataPrices = data.prices;
  const getObj = countEntrants(entrants);
  const { child, adult, senior } = data.prices;
  return child * getObj.child + adult * getObj.adult + senior * getObj.senior;
}

module.exports = { calculateEntry, countEntrants };
