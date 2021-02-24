importScripts('https://www.gstatic.com/firebasejs/8.2.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.6/firebase-messaging.js');
 
firebase.initializeApp({
  apiKey: 'AIzaSyBp8ssZ4LEJqzdRYMbK9rvh66_za4iujdM',
  authDomain: 'expert-fitness-midland-tx.firebaseapp.com',
  databaseURL: 'https://expert-fitness-midland-tx.firebaseio.com',
  projectId: 'expert-fitness-midland-tx',
  storageBucket: 'expert-fitness-midland-tx.appspot.com',
  messagingSenderId: '179991880670',
  appId: '1:179991880670:web:a1394671023dc13052f34f',
  measurementId: 'G-RSCR13VTT9'
});
 
const messaging = firebase.messaging();
