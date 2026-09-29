// Task 1: Create the Profile
let profile = [
  "chickenNugget23",
  23,
  true,
  "San Diego",
  ["play video games", "watch shows"],
];

// Task 2: Access and Log Profile Details
console.log(profile[0]); // username
console.log(profile[4][1]); // second hobby from hobbies array

// Task 3: Modify the Profile
profile[1] = 24; // update the user's age to a new value
profile[4][2] = "sleep"; // add a new hobby to the hobbies array

// Task 4: Display the Updated Profile
console.log(profile);
