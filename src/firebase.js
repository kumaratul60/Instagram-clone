import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDu1-kOjZsI1rbQVmKUBM4D3CGwzLn5LMc",
  authDomain: "instagram-clone-12fjly21.firebaseapp.com",
  projectId: "instagram-clone-12fjly21",
  storageBucket: "instagram-clone-12fjly21.appspot.com",
  messagingSenderId: "593109650791",
  appId: "1:593109650791:web:c090e86d78b2600cd3f3c2",
  measurementId: "G-18J0MDFHQX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebaseApp.auth();

export { db, storage, auth };
