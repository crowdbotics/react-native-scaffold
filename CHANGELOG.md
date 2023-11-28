# Changelog

Based on [Common Changelog](https://common-changelog.org/).

## 2.6.2 - 2023-11-28

### Fixed

Prevent the root `yarn.lock` file from being gitignored (negate pattern).

## 2.6.1 - 2023-11-23

### Fixed

Removed unused `package.json` files on sub-directories. Those had illegal names such as `@modules` that prevented running `yarn add <library>` on a module directory.

## 2.6.0 - 2023-11-14

### Added

Added new `helpers` directory and `@helpers` alias on `webpack.config.js` and `metro.config.js`.

The `index.js` includes two new helper hooks for building responsive designs:
- `useComponentLayout` - custom hook for the `onLayout` prop callback - useful for measuring individual elements on resize
- `useMatchMedia` - custom hook that abstracts the `window.matchMedia` Web API

## 2.5.2 - 2023-11-02

### Fixed

- added `@components` alias to `webpack.config.js`- this alias was missing

## 2.5.1 - 2023-11-02

### Fixed

- added `@store` alias to `metro.config.js`- this alias was missing

## 2.5.0 - 2023-10-10

### Added

- added `@components` alias - better support for composition

## 2.4.0 - 2023-07-17

### Changed

- added support for react-native-paper in scaffold


## 2.3.0 - 2023-07-10

### Changed

- update the welcome screen, move styles to the `index.js` file
- added into the index.html, at the header, some style to support 100% height of all screens

## 2.2.0 - 2023-06-20

### Added

Introduced the ability to use Fastlane lanes from a shared repository [fastlane-config](https://github.com/crowdbotics/fastlane-config)

- Added 'import_from_git' command to import the Fastfile from an external repository.
- Added 'FASTLANE_CONFIG_VERSION' environment variable which refers to a tag on the fastlane-config repo.

### Changed

Changed the Fastfile to use instance variables instead of local variables to pass to the inherited lanes.

## 2.1.1 - 2023-06-19

### Fixed

- Fixed web build issue with node_modules compilation.

## 2.1.0 - 2023-06-19

### Added

- Support for csrf token to the Django Web build version.

## 2.0.0 - 2023-05-31

_If you are upgrading: please see [scaffold-upgrade.md](/docs/scaffold-upgrade.md)._

### Added

- Support for [typescript](https://www.typescriptlang.org/), see [tsconfig.json](/scaffold/template/tsconfig.json).
- Support for configuring options for your `react-navigation` screens in global options.
- User documentation for `@modules`, see [modules/README.md](/scaffold/template/custom/modules/README.md).

### Changed

- Upgrade React Native to [0.71.7](https://github.com/facebook/react-native/releases/tag/v0.71.7).
- Upgrade React to [18.2](https://github.com/facebook/react/releases/tag/v18.2.0).
- Target Android SDK version 33, minimum level 21 - [build.gradle](/scaffold/template/android/build.gradle).
- Target iOS SDK minimum level set at 12.4 - [Podfile](/scaffold/template/ios/Podfile).

## 1.2.0 - 2023-05-31

### Added

- Support for Appetize-only deployments (skipping store submissions/fastlane/fastflight).

## Changed

- Upgraded `.python-version` to [3.8.13](https://www.python.org/downloads/release/python-3813/).

### Fixed

- Removed unused code in the `.circleci` directory.

## 1.1.0 - 2022-06-01

### Added

React Native Web support (#343) - include a Webpack configuration in the scaffold.

## 1.0.0 - 2021-04-07

_First release._
