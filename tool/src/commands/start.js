import createLogger from "../logger.js";

const logger = createLogger("commands:start");
// Using module.exports to export the function so that it can be imported in other files.
function start(config) {
  logger.highlight(" Starting the app ");
  logger.debug(
    "Received configuration in start -",
    JSON.stringify(config, null, 2)
  );
}

export default start;
