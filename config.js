import path from "path";

const SCAFFOLD_DIRECTORY = path.join("scaffold");
const DISTRIBUTION_DIRECTORY = path.join("dist");
const RAW_DISTRIBUTION_DIRECTORY = path.join("dist", "raw");
const COOKIE_DISTRIBUTION_DIRECTORY = path.join("dist", "cookie");

export default {
  scaffold: {
    directory: SCAFFOLD_DIRECTORY
  },
  dist: {
    directory: DISTRIBUTION_DIRECTORY,
    builds: {
      raw: {
        directory: RAW_DISTRIBUTION_DIRECTORY,
        // Avoids react-native cli error:
        // "Project name shouldn't contain "HelloWorld" name in it,
        // because it is the CLI's default placeholder name."
        placeholderName: "ProjectName",
        // Matches template title placeholder
        titlePlaceholder: "Hello App Display Name"
      },
      cookie: {
        directory: COOKIE_DISTRIBUTION_DIRECTORY,
        config: {
          project_name: "{{cookiecutter.project_name}}",
          project_slug:
            "{{cookiecutter.project_name|lower|replace(' ', '')|replace('-', '_')}}",
          project_dash_slug: "{{cookiecutter.project_slug|replace('_', '-')}}",
          project_description: "",
          owner_email: "",
          ssh_key_fingerprint: ""
        }
      }
    }
  }
};

const VALID_MARK = "\u2705";
const INVALID_MARK = "\u274C";
const WARNING_MARK = "\u26A0";

export const valid = (...args) => {
  console.log(VALID_MARK, ...args);
};

export const invalid = (...args) => {
  console.error(INVALID_MARK, ...args);
  process.exit(1);
};

export const warn = (...args) => {
  console.log(WARNING_MARK, ...args);
};

export const section = (...msg) => {
  console.log("");
  console.log(">", ...msg);
};
