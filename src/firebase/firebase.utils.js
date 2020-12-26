import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAosAgenLRyEVQNf-NpkLhRzsD9eYVw_WI",
  authDomain: "crwn-db-9695d.firebaseapp.com",
  projectId: "crwn-db-9695d",
  storageBucket: "crwn-db-9695d.appspot.com",
  messagingSenderId: "1058450846800",
  appId: "1:1058450846800:web:e08cd9d7119382ecdb0d55",
  measurementId: "G-0X8JSC0720"
};

export const createUSerProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get()
  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("error creating user: ", error);
    }
  }
  return userRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;