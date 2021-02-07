import firebase from "firebase/app";
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAqUFVrGPwVtQd_tarttdxLMHjanVNjHHs",
    authDomain: "pokemon-game-taras.firebaseapp.com",
    databaseURL: "https://pokemon-game-taras-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-taras",
    storageBucket: "pokemon-game-taras.appspot.com",
    messagingSenderId: "500688237063",
    appId: "1:500688237063:web:7e1bd2e52fbc71c11730a2"
};

firebase.initializeApp(firebaseConfig)

export const fire = firebase;

export const database = fire.database()

export default database;