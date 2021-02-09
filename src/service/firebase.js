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

class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);

        this.fire = firebase;
        this.database = this.fire.database()

    }

    getPokemonSoket = (cb) => {
        this.database.ref('pokemons').on('value', (snapshot) => {
            cb(snapshot.val())
        })
    }

    getPokemonsOnce = async() =>{
        return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
    }

    postPokemon = (key, pokemon) => {
        this.database.ref(`pokemons/${key}`).set(pokemon);
    }

    addPokemon = (data, cb) => {
        const newPostKey = this.database.ref().child("pokemons").push().key
        this.database.ref('pokemons/' + newPostKey).set(data).then(() => cb());
    }

}

export default Firebase;