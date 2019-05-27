# Crowdbotics React Native scaffold

After cloning this repo, you will need to install the dependencies:

`cd ProjectName`

`yarn install`

## Installing all dependencies in for development
Please follow this guide and install the correct dependencies for your current OS and the OS that you want to build (iOS or Android)

https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies

## Running with React Native CLI

### Running android
This is a straightforward process.

`react-native run-android`

You need to have an emulator running or an Android device connected to your computer to make it work

### Running iOS
This one needs a bit more of work.

Follow this steps:

https://facebook.github.io/react-native/docs/running-on-device

1) Open xcode
2) click on "open another project"
3) Browse to the this application folder, then `/ios`, then open `AppName.xcodeproj`
4) Sign the application with your certificate
5) Run `react-native run-ios` from project home folder.

If you find any compiling problems, try to clean your cache. From the home app folder run:

`cd node_modules/react-native/scripts && ./ios-install-third-party.sh && cd ../../../`

and

`cd node_modules/react-native/third-party/glog-0.3.5/ && ../../scripts/ios-configure-glog.sh && cd ../../../../`

## Running with Fastlane

[Fastlane](https://fastlane.tools/) makes testing, building, and deploying apps
easier.

Install fastlane globally (`npm i -g fastlane` or `yarn i -g fastlane`).
Android and iOS dependencies are the same as React Native CLI.

All fastlane commands are run from the platform directory. For example, Android
commands must be run from `android/`. Fastlane should be executed using `bundle
exec` to ensure dependencies are managed correctly.

The commands for Android and iOS are the same:

* Run tests: `bundle exec fastlane tests`
* Local build: `bundle exec fastlane build`
* Build and upload a beta (requires signing): `bundle exec fastlane beta`
* Build or promote a release: `bundle exec fastlane deploy`

### Android

Publish an Android app you must first create an app in the Play Console and
manually upload an APK. After the first upload run `bundle exec fastlane supply
init` from `android/` to sync with the Play store. All future releases will be
uploaded automatically.

Android uses tracks. A beta release will build the app and upload to the beta
track. Deploying will promote from beta to production.

### iOS

CB developers must follow fastlane's [codesigning guide](https://codesigning.guide/) for using match.
Match will automatically sign iOS builds.

New CB developers should get access to the codesigning repo and run `bundle
exec fastlane match development` from `ios/`.

Not a CB developer? Create an [Apple developer](https://developer.apple.com)
and follow the instructions on [codesigning guide](https://codesigning.guide/)
to setup your certificates.
