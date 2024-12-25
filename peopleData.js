const individualsData = [
  {
    name: "rahul",
    age: 30,
    city: "pune",
    currentlyEmployed: "softWare employee",
    vehicle: "car",
    education: "computer science",

    hobbies: ["playing Chess", "gardening", "traveller"],

    pets: [
      {
        type: "dog",
        breed: "golden retriver",
        name: "max",
        age: 4,
        isVaccinated: true,
        isFullyVaccinated: true,
        likesTo: "loves playing fetch in the park",
      },
    ],
  },

  {
    name: "ananya",
    age: 30,
    city: "bangalore",
    currentlyEmployed: false,
    vehicle: "public transport",
    education: "computer science",

    hobbies: ["cooking"],

    pets: [
      {
        type: "parrot",
        name: "kiwi",
        age: 3,
        isVaccinated: true,
        likesTo: "mimics her voice",
      },
    ],
  },

  {
    name: "ramesh",
    age: 45,
    city: "jaipur",
    currentlyEmployed: "business Owner",
    vehicle: "no vehicle",
    education: "business analytics",

    hobbies: ["rose gardening", "reading historical fiction books"],

    pets: [
      {
        type: "cat",
        breed: "persian cat",
        name: "Bella",
        age: 3,
        isVaccinated: true,
        isFullyVaccinated: true,
        likesTo: "love lounging in the sun",
      },

      {
        type: "cat",
        breed: "persian cat",
        name: "leo",
        age: 3,
        isVaccinated: true,
        isFullyVaccinated: true,
        likesTo: "love lounging in the sun",
      },
    ],
  },

  {
    name: "kavya",
    age: 28,
    city: "chennai",
    currentlyEmployed: false,
    vehicle: "no vehicle",
    education: "12th fail",

    hobbies: ["dancing", "reading fantasy novels", "watching sci-fi shows"],

    pets: [
      {
        type: "Rabbit",
        name: "Snowy",
        age: 2,
        isVaccinated: true,
        isFullyVaccinated: false,
        likesTo: "enjoys hopping around backyard and nibbling on carrots",
      },
    ],
  },
];

/*
1. How many individuals are currently employed?
2. How many people own a car?
3. How many pets are fully vaccinated?
4. What are the names of all the pets, and what type of animal is each?
5. Which cities do the individuals live in?
6. How many hobbies are shared across the group? What are they?
7. How many pets belong to people who are currently unemployed?
8. What is the average age of the individuals mentioned in the passage?
9. How many individuals have studied computer science, and how many of them have pets?
10. How many individuals own more than one pet?
11. Which pets are associated with specific favorite activities?
12. What are the names of all animals that belong to people who live in Bangalore or Chennai?
13. How many vaccinated pets belong to people who do not own a car?
14. What is the most common type of pet among the group? ///////////////////////
15. How many individuals have more than two hobbies?
16. How many individuals share at least one hobby with Ramesh?
17. Which pet is the youngest, and what is its name?
18. What types of books are mentioned as interests, and who reads them?
19. How many individuals live in cities starting with the letter "B"?
20. Which individuals do not own any pets?
*/

const getAllPetsInfo = function (data) {
  return data.flatMap(({ pets }) => pets);
};

const currentlyEmplyed = function (peopleData) {
  return peopleData.filter(({ currentlyEmployed }) => currentlyEmployed).length;
};

const howManyPeopleOwnCar = function (peopleData) {
  return peopleData.filter(({ vehicle }) => vehicle.includes("car")).length;
};

const howManyPetsFullyVaccinated = function (peopleData) {
  return peopleData
    .flatMap(({ pets }) => pets)
    .filter(({ isFullyVaccinated }) => isFullyVaccinated).length;
};

const namesOfAllPets = function (peopleData) {
  return peopleData
    .flatMap(({ pets }) => pets)
    .map(({ name, type }) => [{ petName: name, type: type }]);
};

const citiesOfIndividuals = function (peopleData) {
  return peopleData.map(({ city }) => city);
};

const hobbiesOfIndividuals = function (peopleData) {
  return peopleData.flatMap(({ name, hobbies }) => [
    name,
    hobbies,
    hobbies.length,
  ]);
};

const petsOfCurrentlyUnemployed = function (peopleData) {
  return peopleData
    .filter(({ currentlyEmployed }) => !currentlyEmployed)
    .map(({ pets }) => pets.length)
    .reduce((total, noOfPets) => total + noOfPets, 0);
};

const averageAgeOf = function (peopleData) {
  return (
    peopleData.reduce((total, { age }) => age + total, 0) / peopleData.length
  );
};

const studiedCSAndNoOfPets = function (peopleData) {
  return peopleData
    .filter(({ education }) => education === "computer science")
    .map(({ name, pets }) => [{ name: name, noOfPets: pets.length }]);
};

const moreThanOnePet = function (peopleData) {
  return peopleData.filter(({ pets }) => pets.length >= 2).length;
};

const petLikes = function (peopleData) {
  return peopleData
    .flatMap(({ pets }) => pets)
    .map(({ name, likesTo }) => [{ petname: name, likesTo: likesTo }]);
};

const filterBangloreAndChennaiPets = function (peopleData) {
  return peopleData
    .filter(({ city }) => city === "bangalore" || city === "chennai")
    .flatMap(({ pets }) => pets)
    .map(({ name, type }) => ({ petName: name, type: type }));
};

const vaccinatedPetsNotHadCar = function (peopleData) {
  return peopleData
    .filter(({ vehicle }) => !(vehicle === "car"))
    .flatMap(({ pets }) => pets)
    .filter(({ isVaccinated }) => isVaccinated)
    .map(({ name, type }) => ({ petName: name, type: type }));
};

const moreThan2Hobbies = function (peopleData) {
  return peopleData
    .filter(({ hobbies }) => hobbies.length > 2)
    .map(({ name, hobbies }) => ({ name: name, hobbies: hobbies }));
};

const sharingHobbyWithRamesh = function (peopleData) {
  const rameshHobbies = peopleData[2].hobbies.join(" ").split(" ");
  return peopleData
    .filter(({ name }) => name !== "ramesh")
    .filter(({ hobbies }) =>
      hobbies
        .join(" ")
        .split(" ")
        .some((hobby) => rameshHobbies.includes(hobby))
    )
    .map(({ name, hobbies }) => ({ name: name, hobbies: hobbies }));
};

const youngestPet = function (youngest, pet) {
  return youngest.age > pet.age ? pet : youngest;
};

const youngestPetInGroup = function (peopleData) {
  const { name, type, age } = peopleData
    .flatMap(({ pets }) => pets)
    .reduce(youngestPet, { age: Infinity });

  return { pet: type, name: name, age: age };
};

const hobbyOfReading = function (books, { name, hobbies }) {
  const readHobby = hobbies.filter((hobby) =>
    hobby.join(" ").split(" ").includes("reading")
  );

  if (readHobby.length !== 0) {
    books.push({ name: name, interestIn: readHobby[0] });
  }

  return books;
};

const interestInBooks = function (peopleData) {
  return peopleData.reduce(hobbyOfReading, []);
};

const livesInCityStartsWithB = function (peopleData) {
  return peopleData
    .filter(({ city }) => city[0] === "B" || city[0] === "b")
    .map(({ name, city }) => ({ name: name, livesIn: city }));
};

const hadNoPets = function (peopleData) {
  return peopleData
    .filter(({ pets }) => pets.length === 0)
    .map(({ name }) => ({ Name: name }));
};

