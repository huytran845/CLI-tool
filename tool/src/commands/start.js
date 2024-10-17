import chalk from "chalk";

// Using module.exports to export the function so that it can be imported in other files.
function start(config) {
  console.log(chalk.bgGreen(" Starting the app "));
  console.log(chalk.gray("Received configuration in start -"), config);
}

export default start;
