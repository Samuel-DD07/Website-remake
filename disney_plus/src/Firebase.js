import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBFochJS49a9iSOnQEbxl62E7i0871kViI",
  authDomain: "disneyplusremake.firebaseapp.com",
  projectId: "disneyplusremake",
  storageBucket: "disneyplusremake.appspot.com",
  messagingSenderId: "162550411766",
  appId: "1:162550411766:web:c8e655758586b45364d7d7"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage }
export default db;