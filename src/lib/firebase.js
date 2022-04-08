import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
}
  from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { app } from './firebaseConfig.js';
import { updateProfile } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

const auth = getAuth();
const user = auth.currentUser;
// Crear usuario
export const createUser = (email, password, displayName) => {
  const auth = getAuth(app);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      updateProfile(auth.currentUser, {
        displayName,
        photoURL: 'https://example.com/jane-q-user/profile.jpg',
      }).then(() => {
        onNavigate('/timeline');
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode || errorMessage);
    });
};

// Iniciar sesion
export const singIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      onNavigate('/timeline');
    })
    .catch((error) => {
      const errorCode = error.code;
      alert(errorCode);
      const errorMessage = error.message;
      alert(errorMessage);
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
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      onNavigate('/timeline');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      alert(errorCode || errorMessage || email || credential);
    });
};
