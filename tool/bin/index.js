#!/usr/bin/env node
// The above statement is a shebang stating which interpreter is used for the script.
import chalk from "chalk"; //Utilizes the chalk library to color console.log statements.

import arg from "arg"; //Utilizes the arg library to better handle arguments.

try {
  const args = arg({
    "--start": Boolean,
    "--build": Boolean,
  });

  if (args["--start"]) {
    console.log(chalk.bgGreen("Starting the app"));
  }
} catch (err) {
  console.log(chalk.yellow(err.message + "\n"));
  helpInfo();
}

function helpInfo() {
  console.log(
    `${chalk.whiteBright("tool [CMD]")}\n${chalk.greenBright(
      "--start"
    )}\tStarts the app\n${chalk.greenBright("--build")}\tBuilds the app\n`
  );
}
