import chalk from "chalk";
import { pkgUpSync } from "pkg-up"; //Using the pkg-up library to find the package.json file up the directory tree.
import { promises as fs } from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function getConfig() {
  const pkgPath = pkgUpSync({ cwd: process.cwd() });
  const pkgJson = await fs.readFile(pkgPath, "utf-8");
  const pkg = JSON.parse(pkgJson);

  if (pkg.tool) {
    console.log("Found configuration", pkg.tool);
    return pkg.tool;
  } else {
    console.log(chalk.yellow("Couldn't find configuration, using default"));
    return { port: 1234 };
  }
}

export default getConfig;
