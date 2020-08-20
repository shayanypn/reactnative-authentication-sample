import * as firebase from "firebase";
import "firebase/auth";

import { FirebaseConfig } from "../config";

// Initialize Firebase App

if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseConfig);
}

export const auth = firebase.auth();

export const loginWithEmail = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const logout = () => auth.signOut();
