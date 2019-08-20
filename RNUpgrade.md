Steps

- $ cookiecutter .
- enter the params, say no (false) with all blueprints
skip Error: ".../src/features" directory already exists
- open project
- delete src/app.js, rename app_.js to app.js
- copy missing assets files into project (src/assets)
- $ yarn install
- $ cd ios
- $ pod install
- $ cd ..
- $ react-native unlink react-native-gesture-handler
- [optional] open android studio > open [projectname]\android, waiting for project build and sync in android studio. skip error here
- open xcode > ios/[projectname].xcworkspace
- remove all references under Libraries
- open android/ios simulator
- $ react-native run-android
- $ react-native run-ios
