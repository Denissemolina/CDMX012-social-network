/* eslint-disable import/no-unresolved */
// el login y el registro y todo lo que tenga que ver con autenticacion de user
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
import { app } from './firebaseconfig.js';
import { onNavigate } from '../main.js';



export const createUser = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      onNavigate('/timeline');
      //console.log('ya entro el user');
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      //console.log('Nel Carnal');
    // ..
    });
};
