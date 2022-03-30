import { getFirestore, collection, query, addDoc, getDocs, doc, setDoc, onSnapshot} 
 frogitm "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js"
// // aqui on snapshot
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
//import { firebaseConfig } from '.';

//import { savePost } from '../post/Post.js'

//const app = initializeApp(firebaseConfig);

const db = getFirestore();


// const ReadPost = async (post, date) => {
//   const divPost = document.createElement('div');
//   divPost.innerHTML = await savePost(post, date);
//   return divPost;
// };
export const savePost = (post, date) => {
  addDoc(collection(db, 'NewNewColection'), {post, date});
}
export const ReadPost = (callBackFn) => {
    getDocs(collection(db, 'posts3')).then((snapshot) => {
      callBackFn(snapshot.docs);
    });
  };

// const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
//     console.log("Current data: ", doc.data());
// })

// export const dataCall = (callBackFunction) => {
//     getDocs(collection(db, 'newColection')).then((snapshot) => {
//       callBackFunction(snapshot.docs);
//     });
//   };


export default ReadPost;
