import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyCg6Q8HEHGM2UPuhtQrn4II_Gt-IjdUOxA",
  authDomain: "projecttest-c764f.firebaseapp.com",
  databaseURL: "https://projecttest-c764f.firebaseio.com",
  projectId: "projecttest-c764f",
  storageBucket: "",
  messagingSenderId: "292593722088",
  appId: "1:292593722088:web:3ab3d5af4d7423360b9f5d"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;