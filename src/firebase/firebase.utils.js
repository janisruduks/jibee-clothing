import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = doc(firestore, 'users/', `${userAuth.uid}`);

  const snapShot = await getDoc(userRef);

  if(snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user'.error.message);
    }
  };

  return userRef;

};

const app = initializeApp(config);

export const auth = getAuth(app);
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => signInWithPopup(auth, provider)

