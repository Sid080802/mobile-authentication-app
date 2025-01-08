# Mobile Auth App

This project, Mobile Auth App, is a phone number authentication system built using Vite, React.js, and Firebase. It provides a seamless and secure way to authenticate users via their phone numbers.

## Features

Phone number authentication using Firebase.
OTP verification for secure login.
Minimal and responsive UI built with React.js.
High performance and fast development enabled by Vite.

## Prerequisites

To run this project, ensure you have the following installed:
1. Node.js: Download Node.js
2. npm or yarn: Comes with Node.js.
3. A Firebase Project: Set up a Firebase project and enable phone authentication.


## Follow these steps to set up the project on your local machine:

1. Clone the Repository

git clone https://github.com/Sid080802/mobile-auth-app.git

cd mobile-auth-app

2. Install Dependencies

npm install

3. Set Up Firebase

Go to the Firebase Console.

Create a new project or use an existing one.

Enable Phone Authentication in the Firebase Authentication section.

Get your Firebase configuration (API key, Auth domain, etc.).

Create a firebase-config.js file in the root of the project and add your Firebase configuration:

VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id

4. Run the Development Server

npm run dev

Visit http://localhost:5173 to view the app.


## Acknowledgements

Vite

React.js

Firebase

