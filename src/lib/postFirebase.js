import {
  getFirestore, collection, query, addDoc, getDoc, setDoc, getDocs, onSnapshot, deleteDoc, doc, orderBy, updateDoc
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

import { app } from './firebaseConfig.js';

import { user } from '../main.js';

export { onSnapshot } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

const db = getFirestore();

// GUARDAR COLECCIONES EN FIRESTORE
export const savePost = (post, date) => addDoc(collection(db, 'posts'), { post, date }); // Posts // timestap // array [] // uid

export const getPost = () => getDocs(collection(db, 'posts'));

// ORDENAR DATOS
const data = collection(db, 'posts');
export const orderPost = query(data, orderBy('date', 'desc'));

// BORRAR POSTS
export const deletePosts = (id) => deleteDoc(doc(db, 'posts', id));

// EDITAR POSTS
export const editPosts = (id) => getDoc(doc(db, 'posts', id));

export const updatePosts = (id, newFields) => updateDoc(doc(db, 'posts', id), newFields);

// export const unsubscribe = onSnapshot(q, (snapshot) => {
//   snapshot.docChanges().forEach((change) => {
//     if (change.type === "added") {
//         console.log("New city: ", change.doc.data());
//     }
//     if (change.type === "modified") {
//         console.log("Modified city: ", change.doc.data());
//     }
//     if (change.type === "removed") {
//         console.log("Removed city: ", change.doc.data());
//     }
//   });
// });
