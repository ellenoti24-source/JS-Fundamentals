const args = process.argv.slice(2);

// Convert first argument to integer
const size = parseInt(args[0], 10);

// Check if size is valid
if (isNaN(size)) {
  console.log("Missing size");
} else {
  for (let i = 0; i < size; i++) {
    let line = "";
    for (let j = 0; j < size; j++) {
      line += "X";
    }
    console.log(line);
  }
}
