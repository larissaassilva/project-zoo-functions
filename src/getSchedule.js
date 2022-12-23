const data = require('../data/zoo_data');

const obj = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: [
      'lions', 'tigers',
      'bears', 'penguins',
      'otters', 'frogs',
      'snakes', 'elephants',
    ],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: {
    officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

const getSchedule = (scheduleTarget) => {
  const animal = data.species.some((specie) => specie.name === scheduleTarget);
  const value = obj[scheduleTarget];
  if (!scheduleTarget) {
    return obj;
  }
  if (animal === true) {
    return data.species.find((specie) => specie.name === scheduleTarget).availability;
  }
  if (animal === false && value === undefined) {
    return obj;
  }
  return { [scheduleTarget]: value };
};

console.log(getSchedule('Monday'));

module.exports = getSchedule;
