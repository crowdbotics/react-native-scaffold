# Setup
1. create an application on Firebase console, add iOS and Android apps , download and make sure your google-services.json (\android\app\ )and GoogleService-Info.plist (ios\ ) are placed in correct folders.

2. iOS: 
- include either APNs Authentication Key in Project Settings > Cloud Messaging 
- Turn on following two capabilities in Xcode 
a) Push Notifications
b) Background Modes - Check only Remote Notifications.
Note: Make sure you open <YourProject>.xcworkspace file using Xcode instead of <YourProject>.xcodeproj.
- Manual linking:
    - Libraries > Add Files To ...
    - Navigate to <YourProject>/node_modules/react-native-firebase/ios/. Select RNFirebase.xcodeproj 
    - Add UserNotifications.framework and libRNFirebase.a
Go to Build Settings, find Header Search Path, Add $(SRCROOT)/../node_modules/react-native-firebase/ios/RNFirebase
