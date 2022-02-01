const data = require('../data/zoo_data');

const dataHours = data.hours;
const dataSpecies = data.species;
const allAnimals = dataSpecies.map((animal) => animal.name);
const dayNames = Object.keys(dataHours);
const dayHours = Object.values(dataHours);
const allAllowedArguments = [...allAnimals, ...dayNames];

const exhibitedAnimals = (day) => {
  const filteredAnimals = dataSpecies.filter((animal) => animal.availability.includes(day));
  const animalsOfDay = filteredAnimals.map((animal) => animal.name);
  return animalsOfDay;
};

const daySchedule = (...dayParam) => {
  const expected = {};
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
  const completeSchedule = daySchedule();
  if (!allAllowedArguments.includes(scheduleTarget)) {
    return completeSchedule;
  }
  if (dayNames.includes(scheduleTarget)) {
    const targetDaySchedule = { [`${scheduleTarget}`]: completeSchedule[scheduleTarget] };
    return targetDaySchedule;
  }
  if (allAnimals.includes(scheduleTarget)) {
    const targetAnimal = dataSpecies.find((animal) => animal.name === scheduleTarget);
    return targetAnimal.availability;
  }
}

module.exports = getSchedule;
