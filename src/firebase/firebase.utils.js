import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

const config = {
  apiKey: "AIzaSyAWjfZtfsOk5Of_vVpcIriKxc1ir-3qKKA",
  authDomain: "jibee-db.firebaseapp.com",
  projectId: "jibee-db",
  storageBucket: "jibee-db.appspot.com",
  messagingSenderId: "424257947521",
  appId: "1:424257947521:web:6e9d7c256faf230bfcca80",
  measurementId: "G-C8K8Y2QTM0"
};

const app = initializeApp(config);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => signInWithPopup(auth, provider)

