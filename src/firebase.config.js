import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyD4fjnMzpNTUHPJF8LjEn_PO8m9pEPduZI',
    authDomain: 'messaging-app-52dd9.firebaseapp.com',
    databaseURL: 'https://messaging-app-52dd9.firebaseio.com',
    projectId: 'messaging-app-52dd9',
    storageBucket: '',
    messagingSenderId: '453331278894',
    appId: '1:453331278894:web:49e7fa5d3ebf8bb9',
};

firebase.initializeApp(config);

export default firebase;

export const db = firebase.firestore();
