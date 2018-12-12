# WRMC Radio

This is a mobile Radio Streaming application for the radio station WRMC 91.1 FM Middlebury College Radio. 

The application was developed with React Native for Android and iOS. The ios and android directories contain versions of the project that can be opened with Xcode and Android Studio. 

The key interpretable files are the JavaScript files found in the 'screens' directory. These are the main files used for each screen of our application, shared by both iOS and Android deployments. Another directory of interest is the 'assets' directory both in the root folder, and the android/ios folders that contain some imported assets. 

# To run locally in iOS:

Clone this repository and run 'npm install' in the cloned directory to install the node modules. 

Open ios/WRMC2.xcodeproj in Xcode. Before running the project from Xcode, you must install the react-native-audio-streaming library. Instructions on how to do this are located on their Github here: https://github.com/tlenclos/react-native-audio-streaming.

After this is done, you should be able to build and run the project from Xcode. 

# To run locally in Andorid:

  Clone this repository and run 'npm install' in the cloned directory to install the node modules.
  
  You must install react-native-audio-streaming. There are multiple files and constants that need to be modified for the
  android side, and detailed instructions for this are included here: https://github.com/tlenclos/react-native-audio-streaming.
  
  Whether you run it with React-Native or Android Studio, you then need to open Android Studio and launch an Android Simulator.
  
  # run with React-Native:
          From the main directory run 'react-native run-android'
  # run as Android Studio project:
          In android studio, click Open -> Existing Project. Select the 'android' subdirectory from the root directory of this repository. 
          From there you can build and run it on an open simulator from Android Studio using the 'Build' and 'Run' Buttons.
