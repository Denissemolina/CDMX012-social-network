import {
  getFirestore, collection, query, addDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

import { app } from './firebaseconfig.js';

export { onSnapshot } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

const db = getFirestore();

export const savePost = (post, date) => {
  addDoc(collection(db, 'posts'), { post, date }); // Posts // timestap // array [] // uid
};

export const q = query(collection(db, 'posts')); // were
