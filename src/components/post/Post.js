import { getFirestore, collection, addDoc, query, where, getDocs, doc, setDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js"

const db = getFirestore();

// export const impressPost = (postss, date)=>
//   addDoc(collection(db, 'tasks3'), {postss, date});

  // export const savePost = (post, date) => {
  //   addDoc(collection(db, 'newColection2'), {post, date});
  // };
// q un querycolection, quien accede a la coleccion 



//ESCUCHAR VARIOS DOCUMENTOS 
// const q = query(collection(db, "cities"), where("state", "==", "CA"));
// const unsubscribe = onSnapshot(q, (querySnapshot) => {
//   const cities = [];
//   querySnapshot.forEach((doc) => {
//       cities.push(doc.data().name);
//   });
//   console.log("Current cities in CA: ", cities.join(", "));
// });

//EDITAR DATOS
// const q = query(collection(db, "cities"), where("state", "==", "CA"));
// const unsubscribe = onSnapshot(q, (snapshot) => {
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