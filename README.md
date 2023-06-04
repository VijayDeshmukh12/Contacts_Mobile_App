# Contacts_Mobile_App
A mobile app built with React Native to display contacts and provide search functionality.

Features
Display contacts from the phone with their names and numbers.
Search contacts by typing in the search box.
View contact details in a dismissable popup.
Prerequisites
To run this app, you need to have the following installed on your machine:

Node.js and npm: https://nodejs.org
React Native CLI: https://reactnative.dev/docs/environment-setup
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-repo-url.git
Navigate to the project directory:

bash
Copy code
cd ContactsApp
Install the dependencies:

bash
Copy code
npm install
Running the App
Start the Metro bundler:

bash
Copy code
npx react-native start
Run the app on a connected device or emulator:

For Android:

bash
Copy code
npx react-native run-android
For iOS:

bash
Copy code
npx react-native run-ios
The app will be launched on your device/emulator, and you can interact with it to view and search for contacts.

Dependencies
The app relies on the following dependencies:

react
react-native
react-native-contacts
These dependencies are automatically installed when running npm install.

Additional Configuration
For iOS:

If you encounter any issues related to permissions, make sure to add the following keys to the Info.plist file:

xml
Copy code
<key>NSContactsUsageDescription</key>
<string>We need access to your contacts to display them in the app.</string>
For Android:

No additional configuration is required for permissions.
