#!/usr/bin/env node
// The above statement is a shebang stating which interpreter is used for the script.
const arg = require("arg"); //Utilizes the arg library to better handle arguments.

const args = arg({
  "--start": Boolean,
  "--build": Boolean,
});

console.log(args);
