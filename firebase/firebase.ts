// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import type { Auth as FirebaseAuth } from "firebase/auth";
import type { FirebaseApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const apiKey: string | undefined = process.env.REACT_APP_APIKEY;
// const test  = {env}

const firebaseConfig = {
	// apiKey: "AIzaSyB5h-2wdnHQlhosP7buxizMEz3_eV9nJsk",
	// authDomain: "next-test-10e45.firebaseapp.com",
	// projectId: "next-test-10e45",
	// storageBucket: "next-test-10e45.appspot.com",
	// messagingSenderId: "1096114772668",
	// appId: "1:1096114772668:web:cd9b53a478b196457eceb9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// export const getFirebaseApp = (): FirebaseApp | undefined => {
// 	if (typeof window === "undefined") return; // バックエンドで実行されないようにする

// 	return getApps()[0] || initializeApp(firebaseConfig);
// };
// export const getFirebaseAuth = (): FirebaseAuth => {
// 	return getAuth(getFirebaseApp());
// };