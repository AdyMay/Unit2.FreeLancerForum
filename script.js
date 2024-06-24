const priceSpan = document.querySelector("#avg-price");
const freelancerList = document.querySelector("#freelancers");

/* State */
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.

const freelancers = [
  { name: " Dr. Slice", price: 25, occupation: " Gardener" },
  { name: " Dr. Pressure", price: 51, occupation: " Programmer" },
  { name: " Prof. Possibility", price: 43, occupation: " Teacher" },
];

const names = ["John", "Doe", "Green"];
const occupations = ["Farmer", "Engineer", "Construction"];
const prices = [200, 500, 1000];
const limit = 10;

// `setInterval` will call `addShape` every 1000 milliseconds (1 second)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addShapeIntervalId)` will stop the interval.

const addFreeLancerIntervalId = setInterval(addFreelancer, 3000);

render(); // We call this function once to render the initial state

/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */
  // Render the squares
  
function render() {
  const freelancerList = document.querySelector("#freelancers");
  const listings = freelancers.map((person) => {
    const newListing = document.createElement("li");
    newListing.innerText = `Name:${person.name} Occupation:${person.occupation} Price:$${person.price}`;
    return newListing;
  });
  freelancerList.replaceChildren(...listings);
}

/**
 * Add a random shape to the `shapes` array
 */

function addFreelancer() {
  const newFreelancer = {
    name: names[Math.floor(Math.random() * names.length)],
    occupation: occupations[Math.floor(Math.random() * occupations.length)],
    price: prices[Math.floor(Math.random() * prices.length)],
  };
  freelancers.push(newFreelancer);
  const averageRate =
    freelancers.reduce(
      (total, currentItem) => (total += currentItem.price),
      0
    ) / freelancers.length;
  priceSpan.innerText = averageRate.toFixed(2);
  render();
}

  // TODO: Stop adding shapes if we've reached the maximum number of shapes