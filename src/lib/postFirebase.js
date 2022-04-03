import {
  getFirestore, collection, query, addDoc, getDoc, getDocs, onSnapshot, deleteDoc, doc
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

import { app } from './firebaseconfig.js';

import { user } from './firebase.js';
export { onSnapshot } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

const db = getFirestore();

//GUARDAR COLECCIONES EN FIRESTORE
export const savePost = (post, date) => {
  addDoc(collection(db, 'posts'), { post, date }); // Posts // timestap // array [] // uid
};

export const q = query(collection(db, 'posts'));

//ENLISTAR DATOS
export const orderPost = () => getDocs(collection(db, 'posts'));

//BORRAR POSTS
export const deletePosts = id => deleteDoc(doc(db, 'posts', id));

//EDITAR POSTS
export const editPosts = id => getDoc(doc(db, 'posts', id))

// //EDITAR DATOS
//  // were  , where("state", "==", "CA")
// //const q = query(collection(db, "posts"));

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