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

Spin a demo app using the customized React Native template:

```sh
yarn run demo
```

Make changes to the scaffold and regenerate distribution artifacts:

```sh
yarn run bootstrap
```

Validate that the original facebook/react-native template was left untouched with:

```sh
yarn run template
```

Update your `config.js` versions and generate an upgrade manifest when done with the changes:

```sh
pipenv shell
yarn run manifest
```

For `nextVersionSHA` use your branch name, and then after your PR gets merged you will have the SHA for the squashed commit. Open a followup PR that changes the next version to that SHA instead. See [#892](https://github.com/crowdbotics/modules/pull/892) as an example.

### macOS config
- make sure to have a compatible version of urllib3 with openssl. urllib3 v2.0 or higher is compatible with OpenSSL 1.1.1 or higher
