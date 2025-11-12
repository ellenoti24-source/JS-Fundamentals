// Convert first argument to integer and print
const args = process.argv.slice(2);

// Convert to integer
const num = parseInt(args[0], 10);

// Check if the conversion succeeded
if (!isNaN(num)) {
  console.log("My number: " + num);
} else {
  console.log("Not a number");
}
