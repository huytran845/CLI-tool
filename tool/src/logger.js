import chalk from "chalk";
import debug from "debug";

function createLogger(name) {
  return {
    log: (...args) => console.log(chalk.gray(...args)),
    warning: (...args) => console.log(chalk.yellow(...args)),
    highlight: (...args) => console.log(chalk.bgGreen(...args)),
    debug: debug(name),
  };
}

export default createLogger;
