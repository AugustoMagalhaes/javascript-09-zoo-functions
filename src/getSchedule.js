const data = require('../data/zoo_data');

const dataHours = data.hours;
const dataSpecies = data.species;
const allAnimals = dataSpecies.map((animal) => animal.name);
const allPossibleArguments = [...allAnimals, ...Object.keys(dataHours)];

const exhibitedAnimals = (day) => {
  const filteredAnimals = dataSpecies.filter((animal) => animal.availability.includes(day));
  const animalsOfDay = filteredAnimals.map((animal) => animal.name);
  return animalsOfDay;
};

const daySchedule = (...dayParam) => {
  const expected = {};
  const dayNames = Object.keys(dataHours);
  const dayHours = Object.values(dataHours);
  dayNames.forEach((day, index, array) => {
    const openingHours = dayHours[index];
    const singleDay = {
      officeHour: (openingHours.open + openingHours.close !== 0)
        ? `Open from ${openingHours.open}am until ${openingHours.close}pm`
        : 'CLOSED',
      exhibition: (exhibitedAnimals(day).length > 0) ? exhibitedAnimals(day)
        : 'The zoo will be closed!',
    };
    expected[day] = singleDay;
  });
  return expected;
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (!scheduleTarget || !allPossibleArguments.includes(scheduleTarget)) {
    return daySchedule();
  }
}

console.log(getSchedule('radiohead'));

module.exports = getSchedule;
