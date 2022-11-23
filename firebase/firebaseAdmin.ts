import { App, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase/auth";
import admin from "firebase-admin"
const firebaseConfig = {
	apiKey: "AIzaSyB5h-2wdnHQlhosP7buxizMEz3_eV9nJsk",
	authDomain: "next-test-10e45.firebaseapp.com",
	projectId: "next-test-10e45",
	storageBucket: "next-test-10e45.appspot.com",
	messagingSenderId: "1096114772668",
	appId: "1:1096114772668:web:cd9b53a478b196457eceb9",
};

export const appAdmin = admin.initializeApp();
// Initialize the default app
// const defaultApp = initializeApp({
// 	credential: applicationDefault(),
// });

// console.log(app);  // '[DEFAULT]'

// Retrieve services via the defaultApp variable...
export const defaultAuth = getAuth();
// const defaultDatabase = getDatabase();


// ... or use the equivalent shorthand notation
// initializeApp({
// 	credential: applicationDefault(),
// 	databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
// });
