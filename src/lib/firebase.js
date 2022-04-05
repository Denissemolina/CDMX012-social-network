import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
}
// eslint-disable-next-line import/no-unresolved
  from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { app } from './firebaseConfig.js';

const auth = getAuth();

// Crear usuario
export const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      onNavigate('/timeline');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

// Iniciar sesion
export const singIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      onNavigate('/timeline');
    })
    .catch((error) => {
      // const errorCode = error.code;
      // alert(errorCode);
      // const errorMessage = error.message;
      // alert(errorMessage);
    });
};

// Cerrar sesión
export const logOut = () => {
  signOut(auth).then(() => {
    onNavigate('/');
  }).catch((error) => {
  });
};

// Login con Google
export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      onNavigate('/timeline');
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
