import {
  getFirestore, collection, query, addDoc, getDoc, setDoc, getDocs, onSnapshot, deleteDoc, doc, orderBy, updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';
import {
  getAuth,
}
  from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
import { app } from './firebaseConfig.js';
export { onSnapshot } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

const db = getFirestore();
const auth = getAuth();

// GUARDAR COLECCIONES EN FIRESTORE OBTENIENDO EL USUARIO
export const savePost = (post, date) => {
  const user = auth.currentUser;
  if (user) {
    const uid = user.uid;
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;

    return addDoc(collection(db, 'posts'), { post, date, displayName });
  }
}; // Posts // timestap // array [] // uid

export const getPost = () => getDocs(collection(db, 'posts'));

// ORDENAR DATOS
const data = collection(db, 'posts');
export const orderPost = query(data, orderBy('date', 'desc'));

// BORRAR POSTS
export const deletePosts = (id) => deleteDoc(doc(db, 'posts', id));

// EDITAR POSTS
export async function editPost(id, editInput, date) {
  const postRef = doc(db, 'posts', id);
  await updateDoc(postRef, {
    post: editInput,
    date: new Date(),
  });
}
// export const updatePosts = (id, newFields) => updateDoc(doc(db, 'posts', id), newFields);

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
