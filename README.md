<h1 align="center">
  <a href="https://crowdbotics.com">
    Crowdbotics React Native Scaffold
  </a>
</h1>

<p align="center">
  A customized React Native scaffold.
</p>

<p align="center">
  <a href="https://github.com/crowdbotics/modules/actions/workflows/lint.yml">
    <img src="https://github.com/crowdbotics/modules/actions/workflows/lint.yml/badge.svg" alt="Source Code linter" />
  </a>
  <a href="https://github.com/crowdbotics/modules/actions/workflows/release.yml">
    <img src="https://github.com/crowdbotics/modules/actions/workflows/release.yml/badge.svg" alt="Production Release" />
  </a>
</p>

## Contents

- [Custom React Native template](/scaffold/template/custom)
- [Changelog](/CHANGELOG.md)
- [Documentation](https://docs.crowdbotics.com)
- [All commands](https://docs.crowdbotics.com/modules-commands)

## Requirements for contributing

The following must be available in your system:

- [node](https://nodejs.org/en)
- [yarn](https://yarnpkg.com/)
- [python](https://www.python.org/)
- [pipenv](https://pypi.org/project/pipenv/)
- [urllib3](https://urllib3.readthedocs.io/en/stable/) without this the project will not run in ```macOS``` environments

Node `v18.16.0` (LTS) recommended.

## Getting started

Install node modules:

```sh
yarn install
```

Install python packages:

```sh
pipenv install
```

Make changes to the scaffold and regenerate distribution artifacts:

```sh
yarn run bootstrap
```

Validate that the original facebook/react-native template was left untouched with:

```sh
yarn run template
```

Make sure to update the [.crowdbotics.json](/scaffold/template/custom/.crowdbotics.json) version and add an entry to [CHANGELOG.md](/CHANGELOG.md).

### macOS config
- make sure to have a compatible version of urllib3 with openssl. urllib3 v2.0 or higher is compatible with OpenSSL 1.1.1 or higher

## Scaffold updates checklist

When making scaffold updates, please make sure the following still works:

- creating a demo app (`npx crowdbotics/modules demo`)
- iOS Appetize build
- iOS TestFlight build
- iOS local emulator (`npx react-native start`)
- iOS local xcode build
- Android Appetize build
- Android Internal build
- Android local emulator (`npx react-native start`)
- Android local debug build (`./android/gradlew assembleDebug -p ./android`)
- Web deployment (called API in the Dashboard)
- Web local dev server (`yarn run web`)
- Web local build (`yarn run web:build`)
- Studio loads the app and the welcome screen renders correctly

In order to test scaffold updates on Dashboard/Studio create a new Review App and set `REACT_NATIVE_SCAFFOLD_REPO_BRANCH` to the name of your branch.

Double check your work locally with those helper scripts checks:

- `yarn run bootstrap` produces no changes besides potential changes in `yarn.lock` resolved versions
- `yarn run template` produces no changes
- `yarn run semver` check passes

Important!

Increase the version of the scaffold in `package.json` and `.crowdbotics.json`.

Finally make sure to update the [CHANGELOG](/CHANGELOG.md) with human friendly descriptions.
