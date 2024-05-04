
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDw4J87fJSGfnaXhI4moIJ-lYPxw6dHux0",
  authDomain: "instagrams-clone-88c0b.firebaseapp.com",
  projectId: "instagrams-clone-88c0b",
  storageBucket: "instagrams-clone-88c0b.appspot.com",
  messagingSenderId: "338646356419",
  appId: "1:338646356419:web:9f691661e0ebd667bd2d76",
  measurementId: "G-VNTKXT7CL1"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const firestore=getFirestore(app);
const storage=getStorage(app);


export {app,auth,firestore, storage};
