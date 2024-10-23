#!/usr/bin/env node
// The above statement is a shebang stating which interpreter is used for the script.
import chalk from "chalk"; //Utilizes the chalk library to color console.log statements.
import arg from "arg"; //Utilizes the arg library to better handle arguments.
import getConfig from "../src/commands/config-mgr.js";
import start from "../src/commands/start.js";
import createLogger from "../src/logger.js";

const logger = createLogger("bin");

async function main() {
  try {
    const args = arg({
      "--start": Boolean,
      "--build": Boolean,
    });

    logger.debug("Received args", JSON.stringify(args, null, 2));

    if (args["--start"]) {
      const config = await getConfig();
      start(config);
    }
  } catch (err) {
    logger.warning(err.message + "\n");
    helpInfo();
  }
}

function helpInfo() {
  console.log(
    `${chalk.whiteBright("tool [CMD]")}\n${chalk.greenBright(
      "--start"
    )}\tStarts the app\n${chalk.greenBright("--build")}\tBuilds the app\n`
  );
}

main();
