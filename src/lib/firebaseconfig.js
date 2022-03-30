// El objeto exportado de firebase
// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';

export const firebaseConfig = {
  apiKey: 'AIzaSyA-MVFvlu9Shmy_Mdw5mBFxuxnQrnoZFpQ',
  authDomain: 'solobino-fd679.firebaseapp.com',
  projectId: 'solobino-fd679',
  storageBucket: 'solobino-fd679.appspot.com',
  messagingSenderId: '794195216918',
  appId: '1:794195216918:web:63e4a554dd8bb27cea8337',
};

export const app = initializeApp(firebaseConfig);
