/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require("path")

const extraNodeModules = {
  "@components": path.resolve(__dirname, "components"),
  "@modules": path.resolve(__dirname, "modules"),
  "@screens": path.resolve(__dirname, "screens"),
  "@options": path.resolve(__dirname, "options"),
  "@store": path.resolve(__dirname, "store"),
  "@helpers": path.resolve(__dirname, "helpers")
}

const watchFolders = [
  path.resolve(__dirname, "components"),
  path.resolve(__dirname, "modules"),
  path.resolve(__dirname, "screens"),
  path.resolve(__dirname, "options"),
  path.resolve(__dirname, "store"),
  path.resolve(__dirname, "helpers")
]

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false
      }
    })
  },
  resolver: {
    sourceExts: ["js", "jsx", "ts", "tsx", "json"],
    extraNodeModules: new Proxy(extraNodeModules, {
      get: (target, name) => {
        const namePaths = name.split(path.sep)
        const scope = namePaths[0]

        // import ... from "@components";
        if (namePaths.length == 1 && name in target) {
          return target[name]
        }

        // import ... from "@components/sub";
        // import ... from "@components/sub/path";
        // import ... from "@components/sub/path/file";
        if (scope in target) {
          const base = namePaths.slice(1).join(path.sep)
          return path.join(target[scope], base)
        }

        // import ... from "react"
        // import ... from "@react-navigation/native"
        return path.join(process.cwd(), "node_modules", name)
      }
    })
  },
  watchFolders,
  resetCache: true
}
