import firebase from 'firebase';
//
import ReduxSagaFirebase from 'redux-saga-firebase';

const myFirebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCr_4JXIfo0Iwj2ZMGDTG_E5HNkXJE0ZqQ',
  authDomain: 'project-madness-fa1ed.firebaseapp.com',
  projectId: 'project-madness-fa1ed',
  storageBucket: 'project-madness-fa1ed.appspot.com',
  messagingSenderId: '387770396311',
  appId: '1:387770396311:web:e32ca86ff229f8ec0c43d2',
  measurementId: 'G-RM6J7FYBZ5',
});
const rsf = new ReduxSagaFirebase(myFirebaseApp);
export default rsf;
