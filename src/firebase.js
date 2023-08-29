
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCsLIFu0TDRA03HvY0MrPcv3mkJpwzbDto",

  authDomain: "disneyplus-clone-affce.firebaseapp.com",

  projectId: "disneyplus-clone-affce",

  storageBucket: "disneyplus-clone-affce.appspot.com",

  messagingSenderId: "693618044823",

  appId: "1:693618044823:web:55b7719af7a2441e579ed2",

  measurementId: "G-7DD8XH8TP6",
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth= firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();

export{auth,provider,storage};
export default db;