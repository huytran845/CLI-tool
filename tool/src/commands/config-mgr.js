import { cosmiconfigSync } from "cosmiconfig";
//import schema from "../config/schema.json" assert { type: "json" }; //Can import schema directly, but is experimental and can change in node.js.
import Ajv from "ajv";
import betterAjvErrors from "better-ajv-errors";
import createLogger from "../logger.js";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const schemaPath = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../config/schema.json"
);
const configLoader = cosmiconfigSync("tool");
const ajv = new Ajv();
const logger = createLogger("config:mgr");

async function getConfig() {
  const result = configLoader.search(process.cwd());

  if (!result) {
    logger.warning("Couldn't find configuration, using default");
    return { port: 1234 };
  } else {
    const schemaData = await fs.readFile(schemaPath, "utf-8");
    const schema = JSON.parse(schemaData);
    const isValid = ajv.validate(schema, result.config);
    if (!isValid) {
      logger.warning("Invalid configuration was supplied");
      console.log();
      console.log(betterAjvErrors(schema, result.config, ajv.errors));
      process.exit(1);
    }
    logger.debug("Found configuration", JSON.stringify(result.config, null, 2));
    return result.config;
  }
}

export default getConfig;
