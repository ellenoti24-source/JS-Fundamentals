const args = process.argv.slice(2);

// Convert first argument to integer
const x = parseInt(args[0], 10);

// Check if it’s a valid number
if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
}
