import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDpO96W1IwtcpTim9LMuzCG0r5YoI_5AZg",
  authDomain: "gym1-adc93.firebaseapp.com",
  projectId: "gym1-adc93",
  storageBucket: "gym1-adc93.appspot.com",
  messagingSenderId: "132005317548",
  appId: "1:132005317548:web:e0cfbe79f29640ed538809",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, db, auth, storage };
