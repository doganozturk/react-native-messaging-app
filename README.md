# React-Native-Messaging-App

This is a mobile application I built for studying purposes, using React-Native (v0.60.5). 

Application has two screens mainly: one for user login and one for chat. Application is kind of dummy, login functionality for example simply uses a user name, there is no password control. Chat functionality is also very simple for now, there is no persistance on that side and it uses a ready made json blob for initial data. Even though, I think the application is a good example and study piece because it contains a simple user authentication/session system by storing unique device ids on Firebase, also contains examples of component level and global (through Redux architecture) state. There are also use cases of some general React-Native components such as View, Text, Image, Flatlist .etc and also some advanced ones such as LinearGradient.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

If you want to set up a development environment for the project , you need these:

```
brew install node@10.16.3
brew install watchman@4.9.0
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk8
```

### Installing

To set up a development environment running

```
git clone https://github.com/doganozturk/react-native-messaging-app.git
cd messagingApp    
npm install
```

#### For iOS 

```
cd ios    
pod install // Install native dependiences through CocoaPods
npm run start:bundler
npm run start:ios
```

#### For Android

After setting up project on Android Studio and syncing Gradle files, you need to register a simulator device. Open your simulator, then:

```
npm run start:bundler
npm run start:android
```

### Known Caveats & Improvements

### Tooling

--- [React Devtools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
    
--- [Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
    
--- Android Studio

--- XCode

## Author

* **Doğan Öztürk** - [Github](https://github.com/doganozturk)
    