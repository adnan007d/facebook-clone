import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC9En7smA4Tb2-Au4ecQQSdtd4zJa-8UdM",
  authDomain: "facebook-clone-314610.firebaseapp.com",
  projectId: "facebook-clone-314610",
  storageBucket: "facebook-clone-314610.appspot.com",
  messagingSenderId: "636389298807",
  appId: "1:636389298807:web:c957f291c879c45e6aec72",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
