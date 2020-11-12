import firebase from 'firebase/app';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWFtwwdaL_uPQ2ya_GlRFlXCBZIhilpTw",
  authDomain: "tienda-5f376.firebaseapp.com",
  databaseURL: "https://tienda-5f376.firebaseio.com",
  projectId: "tienda-5f376",
  storageBucket: "tienda-5f376.appspot.com",
  messagingSenderId: "453528773521",
  appId: "1:453528773521:web:ea73a9d684114ca493f030",
  measurementId: "G-Q0E1YY3M4M"
};
// https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/logo.png?alt=media&token=f1408256-0270-42dc-9a5e-24762bc0e188
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
  storage,
  firebase as default,
};