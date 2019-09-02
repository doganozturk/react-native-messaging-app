# React-Native-Messaging-App  
  
This is a mobile application I built for studying purposes, using React-Native (v0.60.5).   
  
Application has two screens: one for user login and one for chat. Application is kind of dummy, login functionality for example simply uses a user name, there is no password control. Chat functionality is also very simple for now, there is no persistence on that side and it uses a ready made json blob for initial data. Even though, I think the application is a good example and study piece because:  
   
 1. It contains a simple user authentication/session system by storing unique device ids on Firebase.   
 2. It contains examples of component level and global (through Redux architecture) state. Also asynchronous actions with help of Redux middleware [redux-thunk](https://github.com/reduxjs/redux-thunk).  
 3. There are also use cases of some general React-Native components such as View, Text, Image, Flatlist .etc and also some advanced ones such as LinearGradient.   
 4. Written entirely using React Hooks.  
  
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
*Note: Especially for Node, I strongly recommend usage of a Node version management tool such as [NVM](https://github.com/nvm-sh/nvm)* or [n](https://github.com/tj/n).  
  
### Installing  
  
To set up a development environment running  
  
```  
git clone https://github.com/doganozturk/react-native-messaging-app.git  
  
cd messagingApp  
  
# Install project dependencies
 npm install  
```  
  
#### For iOS   
```  
cd ios   

# Install native dependiences through CocoaPods  
pod install  
  
# Start metro bundler  
npm run start:bundler  
  
# Build project for iOS  
npm run start:ios  
```  
  
#### For Android  
  
After setting up project on Android Studio and syncing with Gradle files, you need to register a simulator device. Open your simulator, then:  
  
```  
# Start metro bundler  
npm run start:bundler  
  
# Build project for Android  
npm run start:android  
```  
  
## Linting & Formatting  
  
The project uses current community favorites such as ESLint and Prettier. I use Intellij IDEA as my IDE and there are appropriate plugins for these tools. All known and respected IDEs and editors have that kind of tools, so I recommend installing them before development.  
  
## Known Caveats & Improvements  
  
--- React-Native version used in this project has some [issues](https://github.com/facebook/react-native/issues/25822). To bypass them I used [patch-package](https://github.com/ds300/patch-package) to patch a file inside that library. This patching process runs at npm postinstall step and it is automatic.  
  
--- Project uses [react-native-dotenv](https://github.com/zetachang/react-native-dotenv) library for supporting .env file usage for environment variables. I used this for Firebase configuration variables.  
  
--- I send my Firebase credentials to the repo, even though it's a bad practice to do so. I chose this way because I want this project to be ready for use as fast as possible.  
  
--- I chose to manipulate users' id fields in the initial json blob data. I did this manipulation because there is this case in Chat screen where user's own messages should be rendered at right hand side of the screen. So there is a need for some kind of data to choose which messages should be rendered at where. I use unique Firebase Firestore ids which are generated by Firebase as user ids in my application and these are in `String` type. The project also uses PropTypes, so there is this issue of number-string problem. To bypass this, after fetching initial json data I convert `Number` type ids to `String` type.  
  
## Tooling  
  
--- [React Devtools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)  
  --- [Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)  
  --- Android Studio  
  
--- XCode  
  
## Author  
  
* **Doğan Öztürk** - [Github](https://github.com/doganozturk)  
  
## License  
  
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.