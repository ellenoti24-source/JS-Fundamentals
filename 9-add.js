const args = process.argv.slice(2);

// Convert arguments to integers
const a = parseInt(args[0], 10);
const b = parseInt(args[1], 10);

// Define the function
function add(a, b) {
  return a + b;
}

// Check if arguments are valid numbers
if (isNaN(a) || isNaN(b)) {
  console.log("Please provide two integers");
} else {
  console.log(add(a, b));
}
