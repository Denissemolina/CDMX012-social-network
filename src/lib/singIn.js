import { getAuth, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
import { firebaseConfig } from './firebaseconfig.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';

import { getFirestore, collection, addDoc, getDocs, doc, setDoc } 
from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js"

// const firebaseApp = initializeApp({
//   apiKey: '### FIREBASE API KEY ###',
//   authDomain: '### FIREBASE AUTH DOMAIN ###',
//   projectId: '### CLOUD FIRESTORE PROJECT ID ###'
// });

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const singIn = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      onNavigate('/timeline');
    })
    .catch((error) => {
      const errorCode = error.code;
      prompt(errorCode);
      const errorMessage = error.message;
      prompt(errorMessage);
    });
};

             //Cerrar sesión
export const logOut = () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    onNavigate('/');
  // Sign-out successful.
  }).catch((error) => {
  // An error happened.
  });
};
             //Login con Google
export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);clearImmediate
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      onNavigate("/timeline");
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      alert(errorCode || errorMessage || email || credential);
    });
};


// export const savePost = (post, date) => {
//   addDoc(collection(db, 'newColection'), {post, date});
// };


// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912
//   });
// }
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }
const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});

// await setDoc(doc(db, "cities", "LA"), {
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA"
// });

// const datos = collection(db, 'posts');
// const datosOrdenados = query(datos, orderBy('date', 'desc'));
// export const unsubscribe = (funct) => {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       const uid = user.uid;
//       console.log('cuenta loggeada');
//       onSnapshot(datosOrdenados, (snapshot) => {
//         const changes = snapshot.docChanges();
//         funct(changes);
//       });
//     }
//   });
// };