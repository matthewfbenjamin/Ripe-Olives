import React, { createContext } from 'react'
import firebase from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyD6zTWP9vX8ZBo5IM03hbRjMHlu3tTPjas",
  authDomain: "ripe-olives.firebaseapp.com",
  projectId: "ripe-olives",
  storageBucket: "ripe-olives.appspot.com",
  messagingSenderId: "1075379567542",
  appId: "1:1075379567542:web:c4c7db928163791a689f17",
  measurementId: "G-K78YD9NQWH"
};

export const FirebaseContext = createContext({})

const FirebaseProvider = ({ children }) => {
  if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);
  const firebaseStorage = firebase.storage();
  const gsReference = firebaseStorage.refFromURL('gs://ripe-olives.appspot.com')
  const gsRefDownloadUrl = gsReference.getDownloadURL()
  return (
    <FirebaseContext.Provider value={{
      firebaseStorage,
      gsReference,
      gsRefDownloadUrl
    }}>
      {children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseProvider
