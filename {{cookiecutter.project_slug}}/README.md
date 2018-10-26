## Crowdbotics React Native scaffold

After cloning this repo, you will need to install the dependencies:

`cd ProjectName`

`yarn install`

### Installing all dependencies in for development
Please follow this guide and install the correct dependencies for your current OS and the OS that you want to build (iOS or Android)

https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies

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