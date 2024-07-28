import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJ6UWrE-HSUQEV91CcvliENROXSIwHF9c",
  authDomain: "shop-609b5.firebaseapp.com",
  projectId: "shop-609b5",
  storageBucket: "shop-609b5.appspot.com",
  messagingSenderId: "618780107833",
  appId: "1:618780107833:web:abcfcf5b7eaf7f434d59e8",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, db, auth, storage };
