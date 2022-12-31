import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAjDwaJe_iAauFd1S5TmCM8rTZHOp3cSMc',
  authDomain: 'youfood-c21a1.firebaseapp.com',
  projectId: 'youfood-c21a1',
  storageBucket: 'youfood-c21a1.appspot.com',
  messagingSenderId: '221401885653',
  appId: '1:221401885653:web:d51dca4ce61e119f756b5c',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
