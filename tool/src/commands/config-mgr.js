import chalk from "chalk";
import { cosmiconfigSync } from "cosmiconfig";
import schema from "../config/schema.json" assert { type: "json" };
import Ajv from "ajv";
import betterAjvErrors from "better-ajv-errors";
// import { pkgUpSync } from "pkg-up"; //Using the pkg-up library to find the package.json file up the directory tree.
//import { promises as fs } from "fs";
// import path, { dirname } from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
const configLoader = cosmiconfigSync("tool");
const ajv = new Ajv({ jsonPointers: true });

async function getConfig() {
  // const pkgPath = pkgUpSync({ cwd: process.cwd() }); //Old code for using pkgUpSync t o find the file path
  // const pkgJson = await fs.readFile(pkgPath, "utf-8");
  // const pkg = JSON.parse(pkgJson);

  // if (pkg.tool) {
  //   console.log("Found configuration", pkg.tool);
  //   return pkg.tool;
  // } else {
  //   console.log(chalk.yellow("Couldn't find configuration, using default"));
  //   return { port: 1234 };
  // }

  const result = configLoader.search(process.cwd());

  if (!result) {
    console.log(chalk.yellow("Couldn't find configuration, using default"));
    return { port: 1234 };
  } else {
    const isValid = ajv.validate(schema, result.config);
    if (!isValid) {
      console.log(chalk.yellow("Invalid configuration was supplied"));
      console.log();
      console.log(betterAjvErrors(schema, result.config, ajv.errors));
      process.exit(1);
    }
    console.log("Found configuration", result.config);
    return result.config;
  }
}

export default getConfig;
