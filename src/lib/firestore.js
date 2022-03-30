// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
// import { firebaseConfig } from './firebaseconfig.js';
// // //import { } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
// // import { collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
// import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js"
// // // esto estaba en getfirestore ->"firebase/firestore";

// //inicializa firestore
// // const firebaseApp = initializeApp({
// //     apiKey: '### FIREBASE API KEY ###',
// //     authDomain: '### FIREBASE AUTH DOMAIN ###',
// //     projectId: '### CLOUD FIRESTORE PROJECT ID ###'
// //   });
// const app = initializeApp(firebaseConfig);

//    const db = getFirestore();

// export const savePost = (posts) => {
//     addDoc(collection(db, 'tasks'), {posti})
// }
// //agrega datos
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }

// // Leer datos en firestore
// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });