import path from "path";
import { execSync } from "child_process";
import fs from "fs";

const demoPath = path.join(process.cwd(), "demo");

const options = {
  encoding: "utf8",
  stdio: "inherit",
  cwd: path.dirname(demoPath)
};
const yaml = path.join(process.cwd(), "cookiecutter.yaml");

function removeDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true });
  }
}

removeDir(demoPath);

const rnCookieCutterCommand = [
  "pipenv run cookiecutter",
  "gh:crowdbotics/react-native-scaffold",
  "--directory dist/cookie",
  "--checkout master",
  `--config-file ${yaml}`,
  "--no-input"
].join(" ");

execSync(rnCookieCutterCommand, options);

execSync(`zip -r ./dist/react-native-demo.zip ${demoPath}`, options);

removeDir(demoPath);
