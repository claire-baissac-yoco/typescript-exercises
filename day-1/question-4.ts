// Question 4: Typing a function
// Add a type for Car then use this type for the function.
// Note: Year is an optional value
// Add a return type

const car1 = {
  model: 'Skyline GTR V-Spec II',
  make: 'Nissan',
  year: 1999,
  isCoupe: true,
};
const car2 = {
  model: 'Impreza WRX STi',
  make: 'Subaru',
  year: 1994,
};

function displayCar({ model, make, year, isCoupe }) {
  if (isCoupe) {
    return `The car is a ${make} ${model}, made in ${year}. Is a coupe.`;
  }
  return `The car is a ${make} ${model}, made in ${year}.`;
}

displayCar(car1);
displayCar(car2);

export {};
